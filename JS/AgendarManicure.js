// Serviços oferecidos
const servicos = [
    { nome: "Mão e Pé completos", duracao: 60, preco: 120 },
    { nome: "Mão completo", duracao: 30, preco: 70 },
    { nome: "Pé completo", duracao: 30, preco: 60 }
  ];
  
  // Agenda
  let agenda = [];
  
  // Função para agendar
  function agendar(nomeCliente, servico, dia, hora) {
    const servicoSelecionado = servicos.find(s => s.nome === servico);
    if (!servicoSelecionado) {
      return "Serviço não encontrado";
    }
  
    const novoAgendamento = {
      nomeCliente,
      servico,
      dia,
      hora,
      duracao: servicoSelecionado.duracao,
      preco: servicoSelecionado.preco
    };
  
    agenda.push(novoAgendamento);
    return "Agendamento realizado com sucesso!";
  }
  
  // Função para consultar agenda
  function consultarAgenda(dia) {
    return agenda.filter(agendamento => agendamento.dia === dia);
  }
  
  // Função para remarcar agenda
  function remarcarAgenda(nomeCliente, dia, novaData, novaHora) {
    let agendamento = agenda.find(a => a.nomeCliente === nomeCliente && a.dia === dia);
    if (agendamento) {
      agendamento.dia = novaData;
      agendamento.hora = novaHora;
      return "Agendamento remarcado com sucesso!";
    } else {
      return "Agendamento não encontrado";
    }
  }
  
  // Função para cancelar agenda
  function cancelarAgenda(nomeCliente, dia) {
    let index = agenda.findIndex(a => a.nomeCliente === nomeCliente && a.dia === dia);
    if (index !== -1) {
      agenda.splice(index, 1);
      return "Agendamento cancelado com sucesso!";
    } else {
      return "Agendamento não encontrado";
    }
  }
  