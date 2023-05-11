const getCourseData = async () => {
  try {
    const response = await fetch(
      process.env.gist ||
        "https://gist.githubusercontent.com/fitzies/38ee88b0084145d40da3a854a19cfd55/raw/a55ae79a023b0764a0b6b596d3f53f1835de4617/courses.json"
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
