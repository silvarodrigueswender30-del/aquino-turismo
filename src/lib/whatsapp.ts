const WHATSAPP_NUMBER = "5524999096384";

export const WHATSAPP_MESSAGES = {
  home: "Olá! Vim pelo site da Aquino Tour e gostaria de informações sobre passeios em Paraty.",
  jeep: "Olá! Vim pelo site da Aquino Tour e gostaria de informações sobre o passeio de jipe em Paraty.",
  escuna: "Olá! Vim pelo site da Aquino Tour e gostaria de informações sobre o passeio de escuna em Paraty.",
  lancha: "Olá! Vim pelo site da Aquino Tour e gostaria de informações sobre o passeio de lancha em Paraty.",
  grupos:
    "Olá! Vim pela página de Grupos e Excursões da Aquino Tour e gostaria de solicitar uma proposta para meu grupo em Paraty.",
} as const;

export function getWhatsappUrl(message: string, web = false) {
  const encodedMessage = encodeURIComponent(message);

  if (web) {
    return `https://web.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodedMessage}`;
  }

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}
