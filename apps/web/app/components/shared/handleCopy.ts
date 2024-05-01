export const handleCopy = (text: string) => {
    try {
      navigator.clipboard.writeText(text);
    } catch (err) {
      return null;
    }
  }
  