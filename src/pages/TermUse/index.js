import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';
import { MaterialIcons, FontAwesome5, Feather } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../contexts/auth';

import Container from '~/components/Container';
import Header from '~/components/Header';
import LanguageComponent from '~/language/LanguageComponent';
import { VERSION } from '~/configs/constantes';

const TermUse = ({ navigation }) => {
  const { t } = useTranslation();
  return (
    <Container style={{ flex: 1 }}>
      <Header navigation={navigation} title={t('Termos de Uso')} />

      <ScrollView style={{ marginLeft: 27, marginBottom: 50 }}>
        <Text style={{ marginTop: 45 }}>
          {t(`Política de Privacidade 
POR FAVOR, RECOMENDAMOS QUE A POLÍTICA DE PRIVACIDADE ABAIXO SEJA LIDA COM 
ATENÇÃO. ELA DESCREVE COMO SÃO TRATADAS AS INFORMAÇÕES PESSOAIS FORNECIDAS POR 
VOCÊ AO ACESSAR E UTILIZAR O NOSSO SITE, APLICATIVOS E/OU SERVIÇOS DA IMUNOSCAN. 
Para fins desta Política de Privacidade, “Usuários”, “Clientes”, “Colaboradores” ou “Vocês” são 
todos os indivíduos que de qualquer forma utilizam os serviços da IMUNOSCAN. 
Em 14 de agosto de 2018, foi aprovada no Brasil a Lei Geral de Proteção de Dados Pessoais - 
LGPD (Lei 13.709) que dispõe sobre o tratamento de Dados Pessoais, inclusive nos meios digitais, 
por pessoa natural ou por pessoa jurídica de direito público ou privado, com o objetivo de 
proteger os direitos fundamentais de liberdade e de privacidade e o livre desenvolvimento da 
personalidade da pessoa natural. A LGPD entrou em vigor em 18 de setembro de 2020. 
A IMUNOSCAN tem o compromisso de respeitar a sua privacidade e proteger seus Dados 
Pessoais de acordo com a legislação do país. Para isso desenvolvemos essa Política de 
Privacidade (“Política de Privacidade”) para proporcionar a Você um claro entendimento de 
como utilizamos e processamos seus dados e informações pessoais, coletados por meio das 
nossas plataformas tecnológicas, redes sociais, atendimento presencial e telefônico, entre 
outros. 
1. Quem somos? 
IMUNOSCAN ENGENHARIA MOLECULAR LTDA. doravante denominado IMUNOSCAN 
CNPJ: 06.935.380/0001-32
Endereço: Avenida dos Vinhedos, 71 sala 1401 - Acácias, Uberlândia - MG, 38.411-159 
Telefone: 
2. Introdução 
2.1. Somos referência em diagnósticos precoces e disruptivos para detecção e 
monitoramento de doenças crônico-degenerativas, painéis especializados para 
doenças infecciosas, oncológicas e genéticas. Oferecemos plataformas tecnológicas 
variadas para entender o mercado laboratorial centralizado e para atender a medicina 
personalizada com instrumentos portáteis eletroquímicos e biofotônicos.
2.2. A IMUNOSCAN está empenhada em respeitar a privacidade de indivíduos de todas as 
nacionalidades no processamento de seus dados pessoais, reconhecendo os direitosfundamentais de legalidade, justiça e transparência. A IMUNOSCAN é aderente aos 
princípios de privacidade de dados desde o projeto (Privacy by design) e por padrão 
(Privacy by default), incluindo a pseudoanonimização e anonimização de dados na 
medida do possível. A IMUNOSCAN cumpre as leis relacionadas à proteção de dados 
em todas as jurisdições em que conduz seus negócios, incluindo, mas não se limitando 
a LGPD (BR 13.709/2018), Regulamento Geral de Proteção de Dados- GDPR, (UE 
2016/679), norma e padrões regulatórios do Ministério da Saúde, Agência Nacional 
de Vigilância Sanitária – ANVISA, Agência Nacional de Saúde – ANS e Autoridade 
Nacional de Proteção de Dados - ANPD.
Acordo de Processamento dos Dados Pessoais 
3. Dados Pessoais de Usuários e Clientes 
3.1. A IMUNOSCAN apenas coleta as informações fornecidas por você para a execução dos 
seus serviços ou conforme estabelecido nesta Política de Privacidade. De modo geral, 
utilizamos os seus Dados Pessoais para prestar serviços à Você de medicina 
diagnóstica. Além disso, poderemos utilizar seus Dados Pessoais para identificar e 
disponibilizar conteúdo relevante para você e lhe enviar comunicados institucionais e 
conteúdo informativo referente aos serviços prestados pela IMUNOSCAN. 
3.2. Nós apenas utilizaremos os seus Dados Pessoais para a finalidade de disponibilização 
e envio de informações estabelecidas nesta Política de Privacidade. Periodicamente,
poderemos solicitar a atualização de seus dados de cadastro em nossa base de 
relacionamento, incluindo dados como nome, CPF, e-mail, telefone, empresa, 
endereço físico e telefone. 
3.3. Conforme aplicável, poderemos utilizar os seus Dados Pessoais para as seguintes 
finalidades: Se você navegar e se cadastrar em nosso Site, poderemos coletar Cookies 
necessários para o funcionamento adequado do site e dados pessoais como nome e 
e-mail para cadastro em nosso mailing e posterior recebimento de nossas 
publicações; 
3.4. Caso Você não queira que a IMUNOSCAN utilize seus Dados Pessoais da forma descrita 
na presente Política de Privacidade, por favor informe ao dpo@imunoscan.com, 
exceto nos casos em que: (i) formos obrigados por Lei, (ii) seja necessário para fins de 
prestar serviços contratados por você; (iii) seja necessário para exercer ou defender direitos da IMUNOSCAN; (iv) tivermos um interesse legítimo para processar os seus 
Dados Pessoais. 
Em hipótese alguma utilizaremos seus Dados Pessoais sem a obtenção do seu 
consentimento formal. 
3.5. Para realizarmos exames laboratoriais e de diagnóstico, podemos coletar e tratar
Dados fornecidos por você e/ou por seu médico através da receita ou pedido médico, 
bem como os dados resultantes dos exames e diagnósticos. Entre esses Dados, 
poderemos coletar e tratar as seguintes informações: nome completo, data e local de 
nascimento, gênero, altura, peso, estado civil, filiação, CPF, RG, informações 
residenciais, e-mail, celular, tratamento ou prescrição médica, diagnóstico médico, 
histórico de saúde, material ou amostra biológica (a depender do exame), 
informações genéticas e sexuais (a depender do exame), etnia, dados bancários (se 
aplicável para pagamento) e dados de convênio (como tipo de convênio e número da 
carteira de convênio) entre outros dados necessários, que podem variar a depender 
do tipo de exame ou tipo de diagnóstico. Caso você opte por agendamento domiciliar 
ou pela entrega dos exames, poderemos obter Dados Pessoais de residência ou local 
para a prestação desses serviços. 
3.6. Não solicitamos informações, nem coletamos Dados Pessoais de crianças, que não
tenham sido fornecidos por seu responsável legal. O tratamento de Dados Pessoais 
de menores de idade somente ocorre em seu melhor interesse e observando a 
necessidade de consentimento do seu responsável legal. 
3.7. Não vendemos ou comercializamos as informações coletadas no Site, Aplicativos ou 
coletadas na prestação de nossos serviços. Entretanto, poderemos compartilhar tais 
dados com nossos agentes, contratados ou parceiros de negócios para finalidade 
exclusiva de executar os serviços oferecidos pela IMUNOSCAN. 
3.8. O uso das informações coletadas e/ou armazenadas exige o processamento de dados 
que poderá ser feito pela própria IMUNOSCAN ou por parceiros contratados para esse 
fim, no Brasil ou no exterior, que também estarão sujeitos a esta Política de 
Privacidade. 
3.9. A IMUNOSCAN não divulga a quaisquer terceiros as informações pessoais 
identificáveis fornecidas por você. No entanto, caso seja solicitado por uma ordem 
expedida por autoridade competente no cumprimento de suas atribuições legais, ou 
em caso de violações ou suspeita de violações desta Política de Privacidade, dos
Termos de Uso ou da Lei, poderá ser requerido a IMUNOSCAN disponibilizar as 
informações pessoais que estiverem armazenadas. A IMUNOSCAN, porém, se compromete a revelar as informações limitando-se ao mínimo necessário para atingir 
as finalidades exigidas. 
4. Dados Pessoais de Colaboradores e candidatos a vagas de emprego 
4.1. Se Você for um colaborador da IMUNOSCAN, poderemos coletar e armazenar os seus 
dados para gerir a relação de emprego com você, conforme nossas políticas internas; 
4.2. Se Você for um candidato a uma vaga de emprego na IMUNOSCAN, poderemos 
coletar e armazenar os seus dados para entrar em contato com você e realizar 
entrevistas de emprego. Seus dados pessoais serão armazenados pelo tempo em que 
durar o processo seletivo. 
5. Websites de Terceiros 
5.1. Como um recurso para os nossos Usuários, podemos fornecer links para outros sites 
na Internet. A IMUNOSCAN não se responsabiliza por esses websites e conteúdos e, 
ainda, não compartilha, subscreve, monitora, valida ou aceita a forma como esses 
websites ou ferramentas de armazenamento de conteúdo coletam, processam e 
transferem suas informações pessoais e privadas. Recomendamos que você consulte 
as respectivas políticas de privacidade e termos de uso de tais websites para se 
informar adequadamente a respeito do uso de suas informações pessoais por outros 
websites ou outras ferramentas. 
Proteção dos Dados Pessoais 
6. Procedimentos de Tecnologia e Segurança da Informação 
6.1. A IMUNOSCAN possui procedimentos físicos, eletrônicos e organizacionais para 
salvaguardar e proteger os Dados Pessoais armazenados em seus sistemas. A 
IMUNOSCAN adota criptografia nas suas bases de dados, firewalls (dispositivos de 
segurança de redes), controles de acesso e outros procedimentos para proteger os 
dados contra perda, uso indevido, acesso não autorizado, divulgação, alteração e 
destruição. O acesso às instalações a IMUNOSCAN é controlado por uma combinação 
de controles técnicos e físicos. A IMUNOSCAN mantém um plano de gestão de 
incidentes e um plano de backup (recuperação) de sistemas e bases de dados no caso 
de serem danificados ou destruídos. Todos os funcionários recebem treinamento sobre segurança e são obrigados anualmente a revisar e compreender os padrões 
globais de proteção de dados aplicáveis à IMUNOSCAN.
6.2. A IMUNOSCAN pode armazenar alguns registros ou documentos em formato de cópia 
impressa (papel ou digital), conforme exigido por lei ou regulamento, ou de acordo 
com o cumprimento de uma finalidade comercial legítima. A IMUNOSCAN 
implementou uma política de retenção de documentos, segundo a qual os 
documentos são armazenados pelo tempo exigido pelas autoridades regulatórias e, 
em seguida, destruídos com segurança. 
7. Transferência de dados pessoais 
7.1. Transferência para Terceiros 
7.1.1. Os Dados Pessoais podem ser compartilhados com terceiros para cumprir os 
fins para os quais os dados foram originalmente coletados. Os Dados Pessoais 
são transferidos a terceiros de acordo com as obrigações contratuais em 
conformidade com os Artigos 15 (I a IV) e 16 da LGPD e o Artigo 28 (4) da GDPR 
quando aplicável, e com esta Política de Privacidade. 
7.2. Transferência para países terceiros 
7.2.1. A IMUNOSCAN segue os princípios estabelecidos no Artigo 33 da LGPD. A 
transferência internacional de dados pessoais somente é permitida nos 
seguintes casos:
i. Para países ou organismos internacionais que proporcionem grau de 
proteção de dados pessoais adequado ao previsto na LGPD;
ii. Quando o destinatário oferecer e comprovar garantias de cumprimento 
dos princípios, dos direitos do titular e do regime de proteção de dados 
previstos na LGPD:
a. cláusulas contratuais específicas para determinada transferência;
b. cláusulas-padrão contratuais;
c. normas corporativas globais;
d. selos, certificados e códigos de conduta regularmente emitidos;
iii. Quando a transferência for necessária para a proteção da vida ou da 
incolumidade física do titular do dado ou de terceiros;
iv. Quando a Autoridade Nacional de Proteção de Dados (ANPD) autorizar 
a transferência;
v. Quando a transferência resultar em compromisso assumido em acordo 
de cooperação internacional;vi. Quando o titular tiver fornecido o seu consentimento específico e em 
destaque para a transferência, com informação prévia sobre o caráter 
internacional da operação, distinguindo claramente está de outras 
finalidades;
vii. Quando necessário para atender as hipóteses previstas nos incisos II, V 
e VI do art. 7º da LGPD.
viii. Quando à Autoridade Nacional de Proteção de Dados (ANPD) 
reconhecer a avaliação do nível de proteção a dados pessoais conferido 
por país ou organismo internacional.
8. Direitos de acesso e escolha 
8.1. A Lei Geral de Proteção de Dados (“Lei n.º 13.709/18” ou “LGPD”) e o Regulamento 
Geral de Proteção de Dados da União Europeia (Regulamento 679/2016/UE) 
conferem determinados direitos aos indivíduos, relativos aos seus respectivos Dados 
Pessoais. 
A IMUNOSCAN está empenhada em cooperar em toda a extensão das leis aplicáveis
no exercício dos direitos dos titulares dos dados. Qualquer titular de dados que deseje 
exercer seus direitos de acordo com a lei de privacidade de dados aplicável ou
perguntar como é feito o tratamento de seus dados pessoais deve entrar em contato 
com a IMUNOSCAN de acordo com a Seção 10 desta Política de Privacidade.
8.2. Os indivíduos cujos dados são tratados pela IMUNOSCAN tem os seguintes direitos 
garantidos de optar ou de se opor à utilização de seus dados pessoais para qualquer 
finalidade materialmente diferente daquela divulgada a eles ou declarado nesta 
Política de Privacidade:
i. Direito Confirmação: direito a ser informado sobre a existência de tratamento. 
ii. Acesso: direito de solicitar o acesso aos dados pessoais tratados pela 
IMUNOSCAN. 
iii. Correção: direito de solicitar a alteração dos dados pessoais tratados pela 
IMUNOSCAN sempre que estiverem incompletos, inexatos ou desatualizados. 
iv. Restrição: direito de solicitar a anonimização, o bloqueio ou a eliminação de 
dados desnecessários, excessivos ou tratados pela IMUNOSCAN em 
desconformidade com a legislação de proteção de dados pessoais. 
v. Portabilidade: direito de solicitar a transmissão dos dados tratados pela 
IMUNOSCAN para outro fornecedor de serviços. vi. Eliminação: direito de solicitar a eliminação dos dados pessoais tratados pela 
IMUNOSCAN com o consentimento do Usuário. 
vii. Informação: direito de ser informado sobre as entidades públicas e privadas 
com as quais a IMUNOSCAN compartilhou dados, sobre a possibilidade de não 
fornecer consentimento e sobre as consequências desta negativa. 
viii. Revogação do consentimento: direito de revogar o consentimento a qualquer 
momento, através de manifestação expressa, por procedimento gratuito e 
facilitado. 
ix. Revisão às decisões automatizadas: possibilidade de revisão de decisões 
tomadas pela IMUNOSCAN unicamente com base em tratamento 
automatizado de dados pessoais que afetem seus interesses. 
x. Direito à revogação do consentimento, nos termos da Lei.
8.3. Caso você opte por não receber e-mails periódicos a respeito dos serviços da 
IMUNOSCAN, você também pode utilizar o endereço dpo@imunoscan.com para nos 
enviar um e-mail informando que você não deseja mais receber tais informações ou 
poderá clicar no botão indicado nas comunicações para deixar de receber tais 
comunicados e/ou informativos. Nós atenderemos o seu pedido e não mais 
enviaremos tais comunicações à Você. Você poderá modificar a sua opção a qualquer 
tempo. 
9. Direitos de execução e recurso 
9.1. Em conformidade com os Princípios estabelecidos no Artigo 6 da LGPD, a IMUNOSCAN 
se compromete a resolver reclamações e disponibilizar informações sobre como 
processamos as informações pessoais em um tempo razoável conforme estabelecido 
no Artigo 19 da LGPD. 
Para quaisquer reclamações que não possam ser resolvidas diretamente, a 
IMUNOSCAN concorda em cooperar ao máximo com os poderes regulatórios para 
prover informações que ajudem nos esclarecimentos. 
10. Canais de atendimento ao Titular dos Dados Pessoais 
Se Você está preocupado com a finalidade para a qual nós usamos seus dados pessoais ou 
deseja obter mais informações sobre o compromisso da IMUNOSCAN em proteger a 
privacidade de dados ou para exercer quaisquer direitos que você possa ter sob as leis de 
privacidade de dados aplicáveis, entre em contato pelos seguintes canais de atendimento: E-mail: dpo@imunoscan.com 
Telefone: 
Correio: 
Att: Encarregado de Tratamento de Dados Pessoais (DPO)
IMUNOSCAN ENGENHARIA MOLECULAR LTDA. 
Avenida dos Vinhedos, 71 sala 1401 - Acácias, Uberlândia - MG, 38.411-159 
Se o titular dos Dados os solicitarem, a informação pode ser prestada oralmente, desde que a 
identidade do titular seja comprovada por medidas previstas na nossa política de segurança da 
informação. 
Nosso objetivo é responder em um tempo razoável (normalmente de 15 dias) em conformidade 
com o Artigo 19 da LGPD. Quaisquer outras dúvidas, críticas, sugestões e/ou reclamações 
poderão ser realizadas pelos mesmos canais de atendimento. 
Alterações à Política de Privacidade 
11. Atualizações da Política de Privacidade 
A IMUNOSCAN pode efetuar atualizações e modificações à presente Política de 
Privacidade e Termo de Uso do site e aplicativos. Quando isso acontecer, faremos uma 
comunicação visível e adequada de acordo com as circunstâncias. Fique atento as 
nossas comunicações sobre qualquer atualização nas nossas Políticas e Termos de Uso. 
Caso as alterações sejam significativas, poderemos solicitar um novo consentimento 
como condição à sua contínua utilização do Site, Aplicativos e/ou nossos serviços. 
Essa Política de Privacidade foi atualizada em 10/03/2021. 
Ao concordar, o usuário submeter-se-á automaticamente aos termos e condições 
estabelecidos pela presente “Política de Privacidade e Termos de Uso do Site, 
Aplicativos e Redes Sociais. Termo de Uso do Aplicativo, Website, e outros Canais digitais
Nós da IMUNOSCAN ENGENHARIA MOLECULAR LTDA, doravante denominado IMUNOSCAN, 
inscrito no CNPJ/CPF sob o nº 06.935.380/0001-32. Com o objetivo de melhorar o 
relacionamento entre usuários, clientes, colaboradores e parceiros de forma transparente e 
colaborativa, disponibilizamos canais de comunicação digitais como aplicativo, website, e 
redes sociais dos quais somos titulares da propriedade intelectual sobre todo os conteúdos 
relacionados. 
Ao cadastrar, acessar ou interagir com o nosso aplicativo, website, e outros canais digitais, 
algumas informações (“Dados” ou “Dados Pessoais”) sobre Você poderão ser guardadas. 
O objetivo deste Termo de Uso é explicar de forma clara e transparente como utilizaremos as 
suas informações e os seus Dados Pessoais coletados e obter seu consentimento espontâneo 
para tratamento dos seus Dados em conformidade com a legislação brasileira (Lei Geral de 
Proteção dos Dados Pessoais - LGPD) e de outros países. Caso não concorde com este Termo 
de Uso, por favor nos explique o motivo de discordância acessando a função fale com o DPO 
disponível no nosso site ou nos envie um e-mail para dpo@imunoscan.com para que possamos 
melhorar cada vez mais. 
1. Do objeto
Nosso aplicativo, website e outros canais digitais de comunicação visam auxiliar e dinamizar o 
dia a dia dos seus usuários. 
2. Da aceitação
O presente Termo estabelece obrigações contratadas, por tempo indeterminado, entre a 
IMUNOSCAN e as pessoas físicas ou jurídicas, usuárias de nosso aplicativo, website e canais 
de comunicação. 
Ao utilizar nosso aplicativo, website e canais de comunicação, será solicitado o seu aceite a 
este Termo de Uso e à nossa Política de Privacidade. Ao aceitar, você está concordando 
integralmente com as presentes normas e comprometendo-se a observá-las, sob o risco de 
aplicação das penalidades cabíveis. 
A aceitação do Termo de Uso e da Política de Privacidade é imprescindível para o acesso às 
funcionalidades completas, e utilização de quaisquer serviços fornecidos através do nosso 
aplicativo, website e outros canais de informação. 
3. Do acesso dos usuários
Serão utilizadas todas as soluções técnicas à disposição do responsável pela administração da 
plataforma digital para permitir o acesso ao serviço 24 (vinte e quatro) horas por dia, 7 (sete) dias por semana. No entanto, a navegação no nosso aplicativo, website ou em alguma de suas 
páginas, assim como nas redes sociais e outros canais de atendimento, poderá ser 
interrompida, limitada ou suspensa para atualizações, modificações ou qualquer ação 
necessária ao seu bom funcionamento. 
4. Do cadastro
Para acesso às funcionalidades do aplicativo, website ou outro canal de comunicação que 
demandem a solicitação de informações ou a prestação de algum serviço, será solicitado o 
preenchimento de um cadastro com Dados Pessoais mínimos necessários para que possamos 
atender a sua solicitação. No caso de pedidos de informações sobre o tratamento dos seus 
Dados, procedimentos adicionais de confirmação de que você é o titular dos Dados serão 
solicitados para sua segurança de acordo com a nossa Política de Segurança da Informação. 
Ao se cadastrar, o usuário poderá informar os dados solicitados, quando facultativos, de livre 
e espontânea vontade. Os campos com preenchimento obrigatório são os de absoluta 
necessidade para provimento do serviço, e retorno da informação. A responsabilidade em 
fornecer a informação verídica, e manter os referidos dados atualizados, são de exclusiva 
responsabilidade do Titular dos Dados (Você) e a qualquer momento podem ser atualizadas 
através do nosso portal na função “fale com o DPO” ou através do e-mail: 
dpo@imunoscan.com. 
A IMUNOSCAN poderá analisar e associar as informações a outras informações que tiver 
acesso, visando a a melhoria de nossos serviços e conteúdo, sempre respeitando a nossa 
Política de Privacidade. 
As informações pessoais coletadas poderão ser utilizadas para efeitos de auditoria, visando a 
melhoria dos serviços e a comunicação com os usuários, clientes e colaboradores da 
Imunoscan. 
O usuário se compromete a não informar seus dados cadastrais e/ou de acesso ao nosso 
aplicativo, website e outros canais digitais para terceiros, responsabilizando-se integralmente 
pelo uso que deles seja feito. 
Em consonância com a Constituição Federal, LGPD no seu artigo 14, o Estatuto da Criança e 
do Adolescente e a Convenção das Nações Unidas sobre os Direitos da Criança, menores de 
18 anos, e aqueles que não possuírem plena capacidade civil, deverão obter previamente o 
consentimento formal, quando solicitado, e supervisão de seus responsáveis legais para 
utilização dos nossos canais de comunicação digital. Sendo de responsabilidade exclusiva dos 
mesmos, o eventual acesso por menores de idade, e por aqueles que não possuem plena 
capacidade civil sem a prévia autorização. Mediante a realização do cadastro, quando solicitado, o usuário declara e garante 
expressamente ser plenamente capaz, podendo exercer e usufruir livremente dos conteúdos, 
serviços e produtos disponibilizados. 
O usuário deverá fornecer um endereço de e-mail ou telefone válido, através do qual a 
empresa realizará todas as comunicações necessárias. 
Após a confirmação do cadastro, o usuário possuirá um login e uma senha pessoal, a qual 
assegura o acesso individual ao seu cadastro. Desta forma, compete ao usuário, 
exclusivamente, a manutenção de referida senha de maneira confidencial e segura, evitando 
o acesso indevido às informações pessoais. 
O seu cadastro é pessoal e intransferível. Toda e qualquer atividade realizada com o uso da 
senha será de responsabilidade do usuário. No caso de uso indevido por terceiros de sua senha 
pessoal, você deverá nos informar prontamente através dos contatos disponíveis, e trocar 
imediatamente a senha para sua segurança. 
Caberá ao usuário assegurar que o seu equipamento seja compatível com as características 
técnicas que viabilizem a utilização do aplicativo, website e redes sociais. 
O usuário, ao aceitar os Termos de Uso, autoriza expressamente a coleta, uso, 
armazenamento, tratamento, compartilhamento ou utilização das informações derivadas do 
uso dos serviços nos canais digitais, incluindo todas as informações preenchidas pelo usuário 
no momento em que realizar ou atualizar o seu cadastro, além de outras expressamente 
descritas na Política de Privacidade que deverá ser autorizada pelo usuário. 
5. Informações coletadas 
A quantidade e o tipo de informações coletadas pela IMUNOSCAN variam conforme o uso que
você faz do nosso aplicativo, site e serviços. Se Você é um usuário do nosso aplicativo e/ou 
canais digitais e de atendimento, e os acessa para informações, utilizaremos alguns dos seus 
Dados Pessoais da forma apresentada abaixo, fundamentado nas respectivas bases legais: 
• Consentimento do Titular; 
• Legítimo Interesse; 
• Execução de Contratos; 
• Tutela da Saúde; 
• Obrigação Legal. 
Dados que são coletados: 
• IP (identificação digital), data e hora de acesso, informações de cookies, fonte de 
referência, tipo de navegador, duração da visita e páginas visitadas. 
Para Cadastro no aplicativo e plataformas digitais: • Nome e sobrenome, data de nascimento, CPF, gênero, Estado, Cidade, número de 
telefone e e-mail. 
Para Exercício dos Direitos do Titular dos Dados 
• Cidade, Estado, data e hora da postagem, ID do usuário, seleção do assunto, e o texto 
da reclamação e informações que você fornecer voluntariamente. 
Para Atendimento (por telefone, chat e redes sociais) 
• Nome completo, CPF (para consulta e validação das informações fornecidas junto à 
Receita Federal), telefone, data de nascimento, e-mail, e histórico de Reclamações a 
Imunoscan. 
Para Envio de e-mail marketing de divulgação de serviços, produtos, novas funcionalidades, 
eventos, conteúdos e informativos. 
• Nome completo e e-mail. 
Para que solicitamos essas informações e o seu Consentimento: 
• Para segurança e validação dos Dados coletados - Verificação de fraude, incluindo a 
autenticidade e veracidade das reclamações e informações; 
• Geolocalização e informações de identificação do navegador e do sistema operacional 
– Indicação de serviços próximos a sua localização e adequação do nosso website ao 
seu navegador e sistema operacional visando melhorar a experiência de navegação; 
• Legítimo Interesse* - Análise de perfil comportamental para o desenvolvimento e 
validação de serviços e features (recursos), por exemplo, Dados de registros de 
Informações ou Reclamações (IP, data, conteúdo, avaliações), status dos documentos 
(Regular, Inativo ou Falecido). 
*Legítimo Interesse - quando o uso e tratamento de dados não contraria outras diretrizes 
estabelecidas pela lei, ou os direitos fundamentais do Titular dos Dados e são realizadas 
mediante o consentimento do Titular dos Dados. 
Como os campos destinados às informações são de livre preenchimento, é possível que haja 
o tratamento de dados pessoais sensíveis (como estado de saúde, origem racial e étnica, 
afiliação religiosa e política, vida sexual, entre outros) fornecidos voluntariamente por Você a 
IMUNOSCAN. Por questões de segurança e preservação de sua privacidade, reforçamos o 
pedido para que evite o fornecimento de qualquer Dado Pessoal no conteúdo preenchido no 
campo informações. 
Coleta de Dados não pessoais Poderão ser coletados dados que não permitem a associação direta a um indivíduo, de forma 
independente. Seguem a alguns exemplos de dados não pessoais que podem ser captamos e 
como podemos usá-los: 
• Podemos coletar informações como idioma, código postal, código de área, localização 
e fuso horário, através de nosso aplicativo, para que seja possível entender melhor o 
comportamento do usuário e, assim, melhorar nossos serviços. 
• Podemos coletar informações sobre atividades dos usuários e clientes em nossos 
aplicativos, site, produtos e serviços. Essas informações coletadas com o propósito 
elaborarmos produtos e serviços mais adequados às necessidades de nossos usuários 
e clientes. 
Outros usos dos dados coletados 
Independentemente de se tratar de informações pessoais ou não pessoais, a IMUNOSCAN 
poderá utilizar os dados e informações coletados para as seguintes finalidades: 
• Responder a eventuais dúvidas e solicitações do usuário ou cliente; 
• Cumprir ordem judicial; 
• Constituir, defender ou exercer regularmente direitos em âmbito judicial ou 
administrativo; 
• Garantir a segurança dos usuários, clientes e colaboradores;
• Manter atualizados os cadastros dos usuários e clientes para contato por telefone, email, SMS, mala direta, redes sociais ou por outros meios de comunicação; 
• Promover seus serviços e seus parceiros, comerciais ou não, e informar sobre novas 
oportunidades e benefícios para os usuários e clientes; 
• Aperfeiçoar a experiência durante a navegação no aplicativo, site, produtos e serviços 
da IMUNOSCAN bem como das demais ferramentas e plataformas lançadas pela 
IMUNOSCAN. 
• Os Dados Pessoais coletados somente poderão ser acessados por profissionais 
devidamente autorizados pela IMUNOSCAN, respeitando a necessidade a que serão 
submetidos, a relevância para os objetivos da IMUNOSCAN e os interesses dos usuários 
e clientes, além de preservar sua privacidade. 
6. Como utilizamos Cookies no nosso website? 
6.1. O que é um Cookie? 
Cookies são pequenos arquivos de texto armazenados em seu navegador ou dispositivo. Os 
Cookies nos permitem reconhecer as suas preferências para, por exemplo, adaptar nosso site 
às suas necessidades específicas. É por meio de um Cookie, por exemplo, que mantemos a sua 
conta logada para visitas posteriores ao nosso site, mesmo quando Você fechar o seu 
navegador. Os Cookies geralmente têm uma data de expiração. Alguns Cookies são excluídos 
automaticamente quando você fecha o navegador (os chamados Cookies de sessão), 
enquanto outros podem ser armazenados por mais tempo no dispositivo até serem excluídos 
manualmente (os chamados Cookies persistentes). 
6.2. Quais cookies utilizamos? 
a. Cookies estritamente necessários, para que nosso website funcione corretamente, 
autenticando logins, por exemplo. Por isso, não é possível recusar estes Cookies, 
quando você utilizar nosso website. 
b. Cookies preferenciais, para que o nosso website possa lembrar das informações 
anteriormente fornecidas pelo usuário, com vistas a melhorar a experiência de 
navegação, como por exemplo, o idioma e região de quem está acessando o site. 
c. Cookies de análise, para melhorar o conteúdo do nosso site e a sua experiência como 
usuário. Esses cookies realizam a coleta automática de determinados Dados Pessoais 
para fornecer informações sobre como nosso site está sendo utilizado, identificando, 
por exemplo, quantas vezes determinada página foi visitada. 
d. Cookies de mídias sociais para habilitar plugins (conectores) de determinadas redes 
sociais, quando você escolhe acessar nosso website por meio dessas redes. Por 
exemplo, o nosso site permite que você se cadastre por meio de redes sociais, com o 
botão “entre com o Facebook”. Esses plugins usam Cookies e outras tecnologias para 
fornecer análises e lhe reconhecer nessas redes sociais para conectar com nossos 
serviços. 
O uso de Cookies de mídias sociais são baseados no legítimo interesse da IMUNOSCAN. Você 
tem a opção de recusar a instalação desses Cookies no seu dispositivo de acesso e/ou optar 
pela remoção destes Cookies direto no seu navegador. Acesse a qualquer momento nosso 
Aviso de Cookies ou vá direto na opção de configurações do seu navegador e altere as suas 
preferências. 
Nós da IMUNOSCAN não nos responsabilizamos pelo uso de Cookies por terceiros. Fique 
atento, pois os Cookies adicionados ao seu navegador por terceiros, podem eventualmente 
continuar a monitorar as suas atividades online, mesmo depois de ter saído do nosso website. 
Para sua segurança é recomendável limpar seus Dados de navegação regularmente. 
7. Compartilhamento de dados com terceiros? Por oferecer plataformas online, a IMUNOSCAN poderá operar em conjunto com outros 
parceiros numa ampla gama de atividades, inclusive para hospedagem, armazenamento de 
dados, analytics (estatísticas), indexação em mecanismo de buscas, entre outras. Dessa forma, 
nos reservamos no direito de compartilhar suas informações, incluindo Dados Pessoais com 
estes parceiros. Adotaremos, sempre que for possível, mecanismos de anonimização e 
pseudonimização desses Dados e firmaremos cláusulas rigorosas em nossos contratos, 
visando preservar ao máximo a sua privacidade. Nos esforçamos para proteger a privacidade 
de seus Dados Pessoais, mas infelizmente não podemos garantir o correto manuseio dos 
Dados Pessoais por terceiros, que utilizam, divulgam e protegem os Dados Pessoais de acordo 
com suas respectivas políticas de privacidade. 
Nós poderemos vir a compartilhar seus Dados Pessoais nos seguintes casos: 
Nossos Fornecedores: Temos uma série de fornecedores que precisamos contratar para 
operar nosso site e oferecer os nossos serviços, e alguns deles podem tratar em nosso nome 
os Dados Pessoais que coletamos. Por exemplo, usamos serviços de hospedagem, 
armazenamento de dados e contratamos serviços de pesquisa de mercado para melhorar a 
sua experiência em nosso site. 
Para resguardar e proteger direitos da IMUNOSCAN: A empresa se reserva no direito de 
acessar, ler, preservar e fornecer quaisquer Dados e informações sobre Você, incluindo 
interações suas, caso sejam necessários para cumprir uma obrigação legal ou uma ordem 
judicial; para fazer cumprir ou aplicar nossa Política de Privacidade e outros acordos e/ou 
contratos; ou proteger os direitos, propriedade ou segurança da IMUNOSCAN, bem como de 
nossos colaboradores e/ou outros usuários. Por exemplo, podemos compartilhar 
determinadas informações com o Ministério da Saúde, Agência Nacional de Saúde, Agência 
Nacional de Vigilância Sanitária, Autoridade Nacional de Proteção de Dados e outros órgãos 
regulatórios quando solicitado formalmente de acordo com as legislações aplicáveis, apenas 
na medida do que foi expressamente solicitado. 
8. Do descadastramento dos Dados
O usuário poderá, a qualquer tempo, requerer o cancelamento de seu Dados através dos 
meios disponíveis no aplicativo, website ou através do e-mail dpo@imunoscan.com. O seu 
descadastramento será realizado o mais rapidamente possível. 
Os Dados poderão ser cancelados obedecendo-se as seguintes regras: 
a) Da parte do usuário: quando solicitado, respeitando-se a legislação; 
b) da parte dos responsáveis pelas plataformas e website: quando da violação dos Termos de 
Uso. 9. Do suporte
Em caso de qualquer dúvida, sugestão ou problema com a utilização dos nossos canais de 
informação, o usuário poderá entrar em contato com o nosso suporte por e-mail mail 
dpo@imunoscan.com ou telefone. 
10. Das responsabilidades
É de responsabilidade do Usuário: 
a) defeitos ou vícios técnicos originados no próprio sistema do usuário; 
b) a correta utilização do nosso aplicativo, website, redes sociais, chat, serviços ou produtos 
oferecidos, prezando pela boa convivência, pelo respeito e cordialidade entre os usuários; 
c) pelo cumprimento e respeito ao disposto nesse Termo de Condições Geral de Uso, na 
respectiva Política de Privacidade e na legislação nacional e internacional; 
d) pela proteção aos dados de acesso à sua conta/perfil (login e senha). 
É de responsabilidade da IMUNOSCAN: 
a) disponibilizar as informações de maneira clara e transparente para o usuário; 
b) sanar e comunicar aos usuários os defeitos e vícios encontrados no serviço ou produto 
oferecido desde que lhe tenha dado causa; 
c) as informações por nós divulgadas, sendo que os comentários ou informações divulgadas 
por usuários são de inteira responsabilidade dos próprios usuários. 
A IMUNOSCAN não se responsabiliza por links externos adicionados por terceiros em seu 
website, redes sociais e sistemas que possam redirecionar o usuário à ambiente externo a 
sua rede. 
Não poderão ser incluídos links externos ou páginas que sirvam para fins comerciais ou 
publicitários ou quaisquer informações ilícitas, violentas, polêmicas, pornográficas, 
xenofóbicas, discriminatórias ou ofensivas. 
11. Dos direitos autorais
A estrutura do aplicativo, website e redes sociais, as marcas, logotipos, nomes comerciais, 
layouts, gráficos e design de interface, imagens, ilustrações, fotografias, apresentações, 
vídeos, conteúdos escritos e de som e áudio, programas de computador, banco de dados, 
arquivos de transmissão e quaisquer outras informações e direitos de propriedade intelectual 
da razão social IMUNOSCAN, observados os termos da Lei da Propriedade Industrial (Lei 
nº 9.279/96), Lei de Direitos Autorais (Lei nº 9.610/98) e Lei do Software (Lei nº 9.609/98), 
estão devidamente reservados. Este Termo de Uso não cede ou transfere ao usuário qualquer direito, de modo que o acesso 
não gera qualquer direito de propriedade intelectual ao usuário, exceto pela licença limitada 
ora concedida. 
O uso dos canais digitais pelo usuário é pessoal, individual e intransferível, sendo vedado 
qualquer uso não autorizado, comercial ou não-comercial. Tais usos consistirão em violação 
dos direitos de propriedade intelectual da Imunoscan, puníveis nos termos da legislação 
aplicável. 
12. Das sanções
Sem prejuízo das demais medidas legais cabíveis, a IMUNOSCAN poderá, a qualquer 
momento, advertir, suspender ou cancelar o cadastro do usuário: 
a) que violar qualquer dispositivo do presente Termo; 
b) que descumprir os seus deveres de usuário; 
c) que tiver qualquer comportamento fraudulento, doloso ou que ofenda a terceiros. 
13. Das alterações
Os itens descritos no Termo de Uso e na Política de Privacidade poderão sofrer alterações, 
unilateralmente e a qualquer tempo, por parte da IMUNOSCAN, para adequar ou modificar 
informações, serviços e produtos, bem como para atender novas exigências legais. As 
alterações serão veiculadas pelo aplicativo, website e demais canais digitais. O usuário poderá 
optar por aceitar o novo conteúdo ou por cancelar o uso dos serviços, caso seja assinante de 
algum serviço. 
14. Do foro
Para a solução de controvérsias decorrentes do presente instrumento será aplicado 
integralmente o Direito brasileiro. 
Os eventuais litígios deverão ser apresentados no foro da comarca em que se encontra a sede 
da IMUNOSCAN.`)}
        </Text>
      </ScrollView>
    </Container>
  );
};
export default TermUse;
