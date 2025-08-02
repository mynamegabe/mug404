export const API_BASE_URL = "https://mug404-backend.gabrielseet.com/";

export async function snapAndSolve(
    image: File,
) {
    const formData = new FormData();
    formData.append("file", image);

    try {
        const response = await fetch(`${API_BASE_URL}/features/snap`, {
            method: "POST",
            body: formData,
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error during snap and solve:", error);
        throw error;
    }
}