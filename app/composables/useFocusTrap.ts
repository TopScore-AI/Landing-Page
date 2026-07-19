/**
 * Focus trap composable for accessibility
 * Traps focus within a modal or dialog for keyboard navigation
 */
export function useFocusTrap() {
  const trapRef = ref<HTMLElement | null>(null)
  const previousActiveElement = ref<HTMLElement | null>(null)

  const getFocusableElements = (element: HTMLElement): HTMLElement[] => {
    const focusableSelectors = [
      'a[href]',
      'button:not([disabled])',
      'textarea:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
    ].join(', ')

    return Array.from(element.querySelectorAll(focusableSelectors))
  }

  const activateFocusTrap = () => {
    if (!trapRef.value) return

    previousActiveElement.value = document.activeElement as HTMLElement
    const focusableElements = getFocusableElements(trapRef.value)

    if (focusableElements.length > 0) {
      focusableElements[0].focus()
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return

      const focusableElements = getFocusableElements(trapRef.value!)
      if (focusableElements.length === 0) return

      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault()
          lastElement.focus()
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault()
          firstElement.focus()
        }
      }
    }

    trapRef.value.addEventListener('keydown', handleKeyDown)
  }

  const deactivateFocusTrap = () => {
    if (previousActiveElement.value) {
      previousActiveElement.value.focus()
    }
  }

  onBeforeUnmount(() => {
    deactivateFocusTrap()
  })

  return {
    trapRef,
    activateFocusTrap,
    deactivateFocusTrap,
  }
}

/**
 * Focus management composable for dialogs
 * Manages focus when opening/closing dialogs
 */
export function useFocusManagement() {
  const dialogRef = ref<HTMLElement | null>(null)
  const previousActiveElement = ref<HTMLElement | null>(null)

  const openDialog = () => {
    previousActiveElement.value = document.activeElement as HTMLElement
    
    nextTick(() => {
      if (dialogRef.value) {
        const focusableElements = dialogRef.value.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
        const firstFocusable = focusableElements[0] as HTMLElement
        if (firstFocusable) {
          firstFocusable.focus()
        }
      }
    })
  }

  const closeDialog = () => {
    if (previousActiveElement.value) {
      previousActiveElement.value.focus()
    }
  }

  return {
    dialogRef,
    openDialog,
    closeDialog,
  }
}
