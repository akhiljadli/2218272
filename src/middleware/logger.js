export const logEvent = (type, message, data = {}) => {
  const log = {
    timestamp: new Date().toISOString(),
    type,
    message,
    data
  };

  // Simulate logging to external service or local logging system
  const existingLogs = JSON.parse(localStorage.getItem("logs") || "[]");
  existingLogs.push(log);
  localStorage.setItem("logs", JSON.stringify(existingLogs));
};
