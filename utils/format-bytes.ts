function formatBytes(bytes: number): string {
    if (bytes < 1024)
        return `${bytes} B`;
    const units = ['KB', 'MB', 'GB'];
    let unitIndex = -1;
    do {
        bytes /= 1024;
        unitIndex++;
    } while (bytes >= 1024 && unitIndex < units.length - 1);
    return `${bytes.toFixed(2)} ${units[unitIndex]}`;
}

export { formatBytes };
