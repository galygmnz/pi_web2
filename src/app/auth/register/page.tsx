import RegisterForm from "../../components/auth/RegisterForm";

export default function RegisterPage() {
  return (
    <div className="p-6 rounded-xl bg-transparent w-180 flex flex-col gap-2 justify-center shrink h-full z-30">
      <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-md">Crear cuenta</h1>
      <p className="text-md md:text-lg text-white/90 mb-5">
        Crea tu cuenta para empezar a reservar canchas
      </p>
      <RegisterForm />
    </div>
  );
}
