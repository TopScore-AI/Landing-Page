/**
 * Enhanced analytics tracking composable
 * Provides comprehensive event tracking for user interactions
 */
export function useAnalytics() {
  const trackEvent = (eventName: string, properties?: Record<string, any>) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', eventName, properties)
    }
    
    // Firebase Analytics
    if (typeof window !== 'undefined' && (window as any).firebase) {
      import('firebase/analytics').then(({ getAnalytics, logEvent }) => {
        const analytics = getAnalytics()
        logEvent(analytics, eventName, properties)
      })
    }
  }

  const trackPageView = (pagePath: string, pageTitle?: string) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'page_view', {
        page_path: pagePath,
        page_title: pageTitle || document.title,
      })
    }
  }

  const trackCTAClick = (ctaLocation: string, ctaText: string) => {
    trackEvent('cta_click', {
      location: ctaLocation,
      text: ctaText,
      timestamp: new Date().toISOString(),
    })
  }

  const trackFeatureInteraction = (featureName: string, action: string) => {
    trackEvent('feature_interaction', {
      feature: featureName,
      action: action,
      timestamp: new Date().toISOString(),
    })
  }

  const trackDownloadClick = (platform: string) => {
    trackEvent('download_click', {
      platform,
      timestamp: new Date().toISOString(),
    })
  }

  const trackFormSubmission = (formType: string, success: boolean) => {
    trackEvent('form_submission', {
      form_type: formType,
      success,
      timestamp: new Date().toISOString(),
    })
  }

  const trackError = (errorType: string, errorMessage: string) => {
    trackEvent('error', {
      error_type: errorType,
      error_message: errorMessage,
      timestamp: new Date().toISOString(),
    })
  }

  return {
    trackEvent,
    trackPageView,
    trackCTAClick,
    trackFeatureInteraction,
    trackDownloadClick,
    trackFormSubmission,
    trackError,
  }
}

/**
 * Scroll depth tracking composable
 * Tracks how far users scroll down the page
 */
export function useScrollDepth() {
  const { trackEvent } = useAnalytics()
  const scrollDepths = [25, 50, 75, 90, 100]
  const trackedDepths = ref<Set<number>>(new Set())

  const checkScrollDepth = () => {
    const scrollTop = window.scrollY
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    const scrollPercent = Math.round((scrollTop / docHeight) * 100)

    scrollDepths.forEach((depth) => {
      if (scrollPercent >= depth && !trackedDepths.value.has(depth)) {
        trackedDepths.value.add(depth)
        trackEvent('scroll_depth', {
          depth_percent: depth,
          page_path: window.location.pathname,
          timestamp: new Date().toISOString(),
        })
      }
    })
  }

  onMounted(() => {
    window.addEventListener('scroll', checkScrollDepth, { passive: true })
  })

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', checkScrollDepth)
  })

  return {
    trackedDepths,
  }
}
