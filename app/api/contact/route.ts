import { NextRequest, NextResponse } from 'next/server';
import TelegramBot from 'node-telegram-bot-api';

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  const botToken = process.env.BOT_TOKEN;
  const chatId = process.env.CHAT_ID;

  if (!botToken || !chatId) {
    return NextResponse.json({ error: 'Telegram bot credentials not configured' }, { status: 500 });
  }

  const bot = new TelegramBot(botToken);

  const text = `{OpenLabs} New message from ${name} (${email}):\n\n${message}`;

  try {
    await bot.sendMessage(chatId, text);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending Telegram message:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
