function inputSanitization<T extends Record<string, unknown>>(obj: T): T {
  const newObj = { ...obj }

  Object.keys(newObj).forEach((key) => {
    const value = newObj[key as keyof T]

    if (typeof value === "string") {
      (newObj as Record<string, unknown>)[key] = value.trim()
    }
  })

  return newObj
}

export default inputSanitization