
export const validate = ({
    name,
    email,
    select,
    cargo,
  }: {
    name: string
    email: string
    select: string
    cargo: string
  }) => {
    const errors: { name?: string; email?: string; select?: string; cargo?: string } = {}
    if (!name || name.trim() === "") {
      errors.name = "É preciso preencher o nome"
    }
    if (!email || email.trim() === "") {
      errors.email = "É preciso preencher o email"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = "Endereço de email invélido"
    }
    if (!select || select.trim() === "") {
      errors.select = "É necessário selecionar a opção"
    }
    if (!cargo || cargo.trim() === "") {
      errors.cargo = "É preciso preencher seu cargo"
    }
    return errors
  }
  