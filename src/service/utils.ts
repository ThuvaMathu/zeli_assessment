export const formatDate = (timestamp: number): string => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleDateString("en-US");
};

// Utility function to format time
export const formatTime = (timestamp: number): string => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
};

export const downloadUrl = (url: string) => {
  const link = document.createElement("a");
  link.href = url;
  link.download = url.split("/").pop() || "image"; // Extracts the filename from the URL
  link.click();
};
