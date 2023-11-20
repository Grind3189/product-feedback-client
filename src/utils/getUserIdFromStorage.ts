export const getUserId = () => {
    const fromStorage = localStorage.getItem("userId");
    const parsedData = fromStorage ? JSON.parse(fromStorage) : "";
    return parsedData
}