import React from "react";

const Button: React.FC = () => {

    return (
        <>
            <h1 className="text-3xl font-bold underline">
    Hello world!
  </h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Botón Primario
        </button>
        <div className="bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100">
  Dark mode ready bro.
</div>
        </>
    );
}
export default Button;