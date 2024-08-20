import { useForm } from "../hooks/useForm";

interface FormData {
  email: string;
  name: string;
  edad: number;
}

export const Formulario = () => {
  const { edad, email, name, formulario, handleChange } = useForm<FormData>({
    email: "",
    name: "",
    edad: 20,
  });

  return (
    <form autoComplete="off">
      <div className="mb-3">
        <label htmlFor="form-label">
          Email:
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={email}
          />
        </label>
      </div>

      <div className="mb-3">
        <label htmlFor="form-label">
          Nombre:
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            value={name}
          />
        </label>
      </div>

      <div className="mb-3">
        <label htmlFor="form-label">
          Nombre:
          <input
            type="number"
            className="form-control"
            name="edad"
            placeholder="Edad"
            onChange={handleChange}
            value={edad}
          />
        </label>
      </div>

      <pre>{JSON.stringify(formulario, null, 2)}</pre>
    </form>
  );
};
