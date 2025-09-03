// app/rentals/page.tsx
import type { Metadata } from "next";
import { RentalsClientPage } from "./RentalsClientPage";

export const metadata: Metadata = {
  title: "Rentals",
};

export default function RentalsPage() {
  return <RentalsClientPage />;
}