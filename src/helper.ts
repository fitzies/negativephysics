const getCourseData = async () => {
  try {
    const response = await fetch(
      "https://gist.githubusercontent.com/fitzies/38ee88b0084145d40da3a854a19cfd55/raw/203f0a6c9c70d6829732bc72a4547e17a1c64a08/courses.json"
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching JSON data:", error);
    throw error;
  }
};

export { getCourseData };
