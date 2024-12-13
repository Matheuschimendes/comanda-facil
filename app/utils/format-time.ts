export function formatTime(seconds: number): string {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const remainingSeconds = seconds % 60
  
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`
  }
  
  export function getTimeColor(seconds: number): string {
    if (seconds <= 300) return 'bg-red-500' // 5 minutes or less
    if (seconds <= 900) return 'bg-blue-500' // 15 minutes or less
    return 'bg-green-500' // More than 15 minutes
  }
  
  