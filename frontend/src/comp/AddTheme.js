import { jwtDecode } from "jwt-decode";


function AddTheme() {
    const addforum = async (event) => {


        const token = localStorage.getItem("token");
        const decodedToken = jwtDecode(token);


        if (!decodedToken) {
          alert("Вы не авторизованы");
          return;
        }
    
        const title = document.getElementById("title").value;
        const description = document.getElementById("description").value;
    

        event.preventDefault();
    



        try {
          const response = await fetch("http://localhost:5000/addevent", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title,
              description,
            }),
          });
    
          if (!response.ok) {
            throw new Error(await response.text());
          }
    
          const note = await response.json();
          console.log(note);
          alert("Успешно");
        } catch (error) {
          console.error(error);
          alert("Произошла ошибка");
        }
      };

      return (
        <div className="auth-container">
              <h1>Добавить отзыв:</h1>
              <form onSubmit={addforum}>
                <label htmlFor="title">ФИО:</label>
                <input type="text" id="title" name="title" required />
                <br></br>
                <label htmlFor="description">Описание:</label>
                <textarea
                  id="description"
                  name="description"
                  rows="4"
                  cols="10"
                  required
                />
                <br></br>
                <button type="submit">Добавить</button>
              </form>
              </div>
          );
}

export default AddTheme;