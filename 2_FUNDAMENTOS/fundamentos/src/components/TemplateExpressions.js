import MyComponent from "./MyComponent";

const TemplateExpressions = () => {

    const name = "Allan"

    const pessoa = {
        name: 'Allan',
        age: 25,
        sex: 'Maculino',
        job: 'Programador'

    }

    return (
        <div>
            <h1>Olá, {name}. Você é:</h1>
            <p>Sua profissão é: {pessoa.job}</p>
            <p>Sua idade é: {pessoa.age}</p>
            <p>Seu sexo é: {pessoa.sex}</p>
            <MyComponent />
        </div>

    );

};

export default TemplateExpressions;