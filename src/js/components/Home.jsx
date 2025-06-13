import React from "react";
import {useState} from "react";

//include images into your bundle

 

//create your first component
const Home = () => {
	const [tareas, setTareas] = useState([]); // una lista vacía al principio
    const [inputValue, setInputValue] = useState(""); // lo que escribe el usuario
	const tareasMapeadas = () => {
        return (
            <>
                {tareas.map((tarea,index) => {
                        return <li key={index}>
                                {tarea}
                                <button onClick={()=> borrarTarea(index)}></button>
                            </li>
                            } )
                }
            </>
        )
    }
    const enterH = (e) => {
        if (e.key === 'Enter') {
            setTareas([...tareas, inputValue])
			console.log(tareas)
            
        }
    }

	return (
		<div className="text-center">
            <input
			type="text"
			value={inputValue}
			onChange={(e) => setInputValue(e.target.value)}
			
			onKeyDown = {enterH}
			
			placeholder = "Escribe una tarea y presiona Enter"
			/>
			
			     <ul>
					{tareasMapeadas ()}
					{tareas.lenght === 0 && <p> No hay tareas, añadir tareas</p>}
				 </ul>	 

		</div>
	);
};

export default Home;