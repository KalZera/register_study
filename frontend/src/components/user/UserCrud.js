import React, { Component } from "react";
import Main from "../template/Main";

const headerProps = {
  icon: "users",
  title: "Usuários",
  subtitle: "Cadastro de Usuários: Incluir, Listar, Alterar e Excluir"
};

class userCrud extends Component {
  render() {
    return <Main {...headerProps}>Cadastro de Usuários</Main>;
  }
}

export default userCrud;
