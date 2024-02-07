window.onload = async () => {
    const request = await fetch("../test.json");
    const result = await request.json();
    console.log(result)

}