export const sendTelegramMessage = async (message: string) => {
  const token = process.env.TELEGRAM_BOT_TOKEN_SECOND;
  const chatId = process.env.TELEGRAM_CHAT_ID_SECOND;

  if (!token || !chatId) {
    console.error("Telegram bot token or chat ID is not set.");
    return;
  }

  const url = `https://api.telegram.org/bot${token}/sendMessage`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
      }),
    });

    if (!response.ok) {
      console.error("Failed to send Telegram message:", response.statusText);
    }
  } catch (error) {
    console.error("Error sending Telegram message:", error);
  }
};
