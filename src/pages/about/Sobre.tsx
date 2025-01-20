function Sobre() {
  return (
    <>
      <div id="contact" className="flex">
        <form id="formulario" action="#" method="submit">
          <label form="nome">Nome: </label>
          <input
            id="nome"
            type="text"
            name="name"
            placeholder="Digite seu nome"
            required
          />
          <span id="txtNome"></span>
          <label form="email">Email: </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Digite seu email"
            required
          />
          <span id="txtEmail"></span>
          <label form="subject">Assunto: </label>
          <input
            id="subject"
            type="text"
            name="subject"
            placeholder="Digite o título da mensagem"
            required
          />
          <span id="txtSubject"></span>
          <label form="message">Mensagem: </label>
          <textarea
            id="message"
            name="message"
            placeholder="Digite sua mensagem"
            required
          ></textarea>
          <button type="submit">Enviar</button>
        </form>
        <section id="mapa" className="flex_start">
          <div id="endereco">
            <p>São Paulo</p>
            <p>SP, Brasil</p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d914.3751813706468!2d-46.634366393282214!3d-23.550453338448467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59aa560e8691%3A0x7c2c9afc207da0a2!2sMarco%20Zero%20de%20S%C3%A3o%20Paulo!5e0!3m2!1spt-BR!2sbr!4v1736446679870!5m2!1spt-BR!2sbr"
          ></iframe>
        </section>
      </div>
    </>
  );
}

export default Sobre;
