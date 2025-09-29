import { useState } from "react";
import { Card } from "../../components/Card";
import { Hello } from "../../components/Hello";
import { TextField } from "../../components/TextField";
import { Navbar } from "../../components/NavBar";

export const HomePage = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const CARDS = [
        {
            id: 0,
            title: 'Card A',
            description: 'Olá eu sou filho do card A'
        },
        {
            id: 1,
            title: 'Card B',
            description: 'Olá eu sou filho do card B'
        },
        {
            id: 2,
            title: 'Card C',
            description: 'Olá eu sou filho do card C'
        }
    ]

    const inc = () => setCount(c => c + 1)

    const handleSubmit = event => {
        event.preventDefault()

        console.log({ name, email, password })
    }

    return (
        <main className="min-h-dvh grid place-items-center bg-slate-50">
            <Navbar />
            <h1 className="text-3x1 font-bold text-slate-800">
                Hello Tailwind + React!
            </h1>
            <div className="container mx-auto p-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {CARDS.map(item => (
                    <Card key={item.id} title={item.title}>
                        <p>{item.description}</p>
                    </Card>
                ))}
            </div>


            <a href="#" className="inline-block px-4 py-2 rounded-lg border hover:bg-slate-300 focus:ring-2 focus:ring-blue-500 transition-all">
                Link com foco
            </a>

            <Hello name="Matheus" />
            <button onClick={inc} className="bg-blue-500 text-neutral-50 px-4 py-2 rounded-2xl cursor-pointer">
                Count: {count}
            </button>

            <form onSubmit={handleSubmit}>
                <TextField
                    id='name'
                    name="fullName"
                    label="Nome completo"
                    placeholder="Digite seu nome!"
                    type="text"
                    value={name}
                    onChange={event => setName(event.target.value)}
                />
                <TextField
                    id='email'
                    name="email"
                    label="E-mail completo"
                    placeholder="Digite seu email!"
                    type="email"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                />
                <TextField
                    id='password'
                    name="password"
                    label="Sua senha"
                    placeholder="Digite sua senha aqui!"
                    type="password"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                />
                <button type="submit" className="bg-blue-500 text-neutral-50 px-4 py-2 rounded-2xl cursor-pointer text-center w-full">
                    Enviar
                </button>
            </form>
        </main>
    );
}
