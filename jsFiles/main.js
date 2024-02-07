window.onload = async () => {
    const request = await fetch("jsFiles/test.json");
    const result = await request.json();
    console.log(result)

}