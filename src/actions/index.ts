"use server";
import * as auth from "@/auth";

export async function signInGithub() {
  return auth.signIn("github");
}

export async function signOut() {
  return auth.signOut();
}
