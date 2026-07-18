/**
 * Inject one or more JSON-LD structured-data blocks into the document head.
 * Replaces the Next.js <JsonLd> component (dangerouslySetInnerHTML).
 */
export function useJsonLd(...schemas: Record<string, unknown>[]) {
  useHead({
    script: schemas.map((schema) => ({
      type: "application/ld+json",
      innerHTML: JSON.stringify(schema),
    })),
  })
}
