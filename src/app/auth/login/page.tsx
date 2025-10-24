import LoginForm from '../../components/auth/LoginForm';

export default function LoginPage() {
    return (
        <div className="p-6 rounded-xl bg-transparent w-180 flex flex-col gap-2 justify-center shrink h-full z-30">
            <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-md">Accede a tu cuenta</h1>
            <p className="text-md md:text-lg text-white/90 mb-5">Inicia sesión para reservar tu cancha</p>
            <LoginForm />
        </div>  
    );
}   