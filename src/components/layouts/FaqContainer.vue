<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-gray-50">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto divide-y-2 divide-gray-200">
        <h2
          class="text-center text-3xl tracking-tight font-bold text-gray-900 sm:text-4xl sm:tracking-tight"
        >
          Perguntas Frequentes
        </h2>
        <dl class="mt-6 space-y-6 divide-y divide-gray-200">
          <Disclosure
            as="div"
            v-for="faq in faqs"
            :key="faq.question"
            class="pt-6"
            v-slot="{ open }"
          >
            <dt class="text-lg">
              <DisclosureButton
                class="text-left w-full flex justify-between items-start text-gray-400"
              >
                <span class="font-medium text-gray-900">
                  {{ faq.question }}
                </span>
                <span class="ml-6 h-7 flex items-center">
                  <ChevronDownIcon
                    :class="[
                      open ? '-rotate-180' : 'rotate-0',
                      'h-6 w-6 transform',
                    ]"
                    aria-hidden="true"
                  />
                </span>
              </DisclosureButton>
            </dt>
            <DisclosurePanel as="dd" class="mt-2 pr-12">
              <p class="text-base text-gray-500">
                {{ faq.answer }}
              </p>
            </DisclosurePanel>
          </Disclosure>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/outline";

const faqs = [
  {
    question: "O que é o Portal do Trader?",
    answer:
      "O Portal do Trader é uma plataforma educacional para traders e investidores que reuniu diversos especialistas e ensinou mais de 300 mil alunos ao longo de 5 anos. Oferecemos 16 cursos gratuitos completos, somando mais de 200 aulas, postagens e eventos ao vivo sobre o mercado financeiro.Durante a jornada do Portal, nós ajudamos a democratizar o conhecimento de qualidade sobre trading e investimentos na bolsa de valores, sempre priorizando ser uma fonte confiável e realista para todos os interessados.O Portal do Trader também é a casa do PLANO TNT, nosso treinamento pago. Ele é uma solução educacional completa, com uma proposta única para você se desenvolver como trader e encontrar o caminho para operar no mercado financeiro, com resultados consistentes.Não temos fórmulas mágicas nem soluções milagrosas, acreditamos apenas em técnicas, conhecimento, planejamento e na experiência dos profissionais consagrados que estão com a gente em nossa trajetória e, agora, também na sua.",
  },
  {
    question:
      "Por que o Portal do Trader é diferente de outros sites para traders?",
    answer:
      "Conteúdo gratuito de alto nívelNós fomos o primeiro site brasileiro a oferecer cursos gratuitos completos sobre trading de maneira totalmente gratuita. Não apenas isso, mas os professores dos cursos são traders reconhecidos que operam contas reais e vivem o mercado na pele.Muitos dos nossos cursos gratuitos são superiores a cursos pagos que são vendidos por aí por algumas centenas de reais. Isso nos ajudou a construir uma verdadeira comunidade de alunos que entendem a realidade do mercado. Confira você mesmo: Curso Day Trade Gratuito, Curso Análise Técnica Gratuito, Curso Price Action Gratuito e veja as postagens do nosso Blog. Time de especialistas multidisciplinarNo Portal do Trader temos um time de especialistas sem comparação que elabora todas as aulas e materiais disponibilizados. Eles são traders de verdade, operam suas contas pessoais e têm uma bagagem enorme de conhecimento no que fazem, além de serem reconhecidos em todo o mercado.Somente com um time completo é possível abordar todas as escolas e modalidades de trading e investimentos em renda variável para que você desenvolva um repertório de técnicas eficaz para operar no mercado.Você pode saber mais sobre eles na página Especialistas.Integridade e confiabilidadeDesde que começamos, em 2014, nós optamos por falar a verdade ao invés de vender ilusões. Sabemos por experiência própria que o caminho do trader e investidor de sucesso exige esforço e que o único atalho é o conhecimento de qualidade.Por isso, nós nunca vendemos nossa integridade fazendo promessas apelativas com o intuito de conseguir mais acessos ou alunos. Hoje, somos reconhecidos por ser um dos únicos canais independentes que fala sobre trading e que você pode confiar.",
  },
  {
    question: "Por onde eu devo começar a estudar?",
    answer:
      "Se você já tem alguma ideia do que está procurando, recomendamos começar pelos cursos gratuitos da área aprenda, são várias opções para você desenvolver suas habilidades. Além disso, procure acompanhar as transmissões abertas da área ao vivo e as novidades do nosso Blog.Agora, se você realmente quer levar seu aprendizado e desenvolvimento para outro nível, precisa conhecer o Plano TNT, nossa solução educacional completa.Mas e se eu não sei absolutamente nada sobre trading?Nesse caso, você pode começar aprendendo conceitos básicos na primeira etapa do Plano TNT: Começando do Zero. As primeiras aulas são gratuitas e você já vai aprender bastante.Lembre-se sempre que dentro de cada uma das aulas, você tem um espaço para tirar todas as suas dúvidas, basta para isso estar cadastrado. Esse recurso é muito importante e pode ajudar você agora mesmo com aquela dúvida que não sai da sua cabeça.Porém, uma vez aluno do Plano TNT, levamos a ideia de acompanhamento a outro nível.Você terá acesso individual aos especialistas que elaboraram o conteúdo e estará conectado a uma comunidade de traders na mesma sintonia que você.Usamos todos os recursos para que isso aconteça: grupos fechados, envio de dúvidas dentro da própria plataforma e AULAS AO VIVO COM CHAT várias vezes por semana.",
  },
  {
    question: "Vocês possuem algum treinamento pago?",
    answer:
      "Sim, nosso treinamento pago é o Plano TNT, uma solução educacional completa e única para traders e investidores. Nós desenvolvemos esse produto a partir da experiência educacional de mais de 300 mil alunos que fizeram nossos cursos nos últimos anos e da bagagem de um time de especialistas sem igual no mercado.Entre os benefícios do Plano TNT você vai encontrar: mais de 300 aulas estruturadas etapa por etapa em um plano educacional, nivelamento educacional partindo do zero, repertório de técnicas (Price Action, Análise Técnica, Tape Reading, Análise Fundamentalista), diversidade de modalidades (scalp, day trade, swing trade e position trade) e ativos (ações, contratos futuros e minicontratos, opções e forex), além de reforçar os alicerces de Trading Plan, Gerenciamento de Risco e Psicologia do Trading. Além desse pacote totalmente completo de aulas gravadas, você tem acesso a transmissões diárias sobre day trade, notícias do pregão, diversas aulas ao vivo durante a semana, participa de nosso grupo fechado e tem benefícios exclusivos com nossos parceiros.O Plano TNT foi pensado para estar à altura do desafio que é operar no mercado financeiro com resultados consistentes. Não existe nada parecido por aí, basta comparar.Conheça o Plano TNT.",
  },
  {
    question: "Onde posso tirar dúvidas sobre as aulas?",
    answer:
      "No fim de cada aula em nossa plataforma educacional você encontra uma área chamada “Discussão e Dúvidas”, basta estar cadastrado no Portal. Lá você tira suas dúvidas sobre o assunto da aula diretamente com o professor responsável pelo conteúdo. Todas as perguntas (desde que relevantes para o tema, claro) são respondidas, sem exceção.",
  },
  {
    question: "Como posso entrar em contato com vocês?",
    answer:
      "Se você tem dúvidas sobre qualquer assunto que não seja especificamente o conteúdo de uma aula, fale conosco pelo email backstage@portaldotrader.com.br, ou pelo nosso WhatsApp (+55 11) 92003-7016. Se a dúvida for sobre algum conteúdo, use o espaço “discussão e dúvidas” dentro de cada uma das aulas disponíveis no site.",
  },
  {
    question: "Vocês têm um telegram?",
    answer: "Sim! Entre agora no nosso grupo aberto através deste link.",
  },
  {
    question: "Vocês fazem recomendações ou calls ao vivo?",
    answer:
      "Não. Somos um site exclusivamente educacional e nosso propósito é ensinar as técnicas para que as pessoas aprendam a pensar e analisar o mercado por conta própria. Nós tomamos muito cuidado com isso, tanto que você só vai encontrar detalhes sobre operações comentadas no site após elas serem finalizadas. Nenhum conteúdo do site deve ser interpretado como recomendação ou análise de ativos, nem deve influenciar decisões de investimento específicas.Essa nossa escolha por não recomendar entradas diretamente traz um grande benefício para nossos alunos: por não serem analistas, nossos traders/professores operam suas contas reais, com dinheiro de verdade e trazem essa experiência para você.",
  },
];
</script>
