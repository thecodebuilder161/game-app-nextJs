import { cookies } from "next/headers";
import { decrypt } from "@/app/lib/sessions";
import { Player } from "@/features/login/model";

const expiresAt = new Date(Date.now() + 1 * 24 * 60 * 60 * 1000);

export async function getUserFromSession() {
  const cookieStore = await cookies();
  const session = cookieStore.get("session")?.value;
  if (!session) return null;
  const payload = await decrypt(session);
  if (!payload || !payload.userId) return null;
  return payload.userId as string;
}

export async function setUserInfo(player: Player) {
  const cookieStore = await cookies();
  cookieStore.set("player", JSON.stringify(player), {
    httpOnly: true,
    secure: true,
    expires: expiresAt
  });
}

export async function getUserInfo() {
  const cookieStore = await cookies();
  const playerInfo = cookieStore.get("player")?.value;
  if (!playerInfo) return null;
  return JSON.parse(playerInfo) as Player;
}

export async function deleteUserInfo() {
  const cookieStore = await cookies();
  cookieStore.delete("player");
}
