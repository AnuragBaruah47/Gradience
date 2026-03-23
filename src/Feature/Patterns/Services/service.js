import { toast } from "sonner";
export const scrollToConfig = {
  duration: 1,
  scrollTo: 0,
  ease: "power2.out",
};

export const copyStyle = async (patterns) => {
  try {
    await navigator.clipboard.writeText(patterns.code);
    toast.success("Copied!", {
      style: {
        background: "#333",
        color: "#fff",
      },
    });
  } catch (err) {
    console.error("Copy failed", err);
  }
};

export const addFavourite = (newItem) => {
  const existing = getFavourites();

  const alreadyExists = existing.some((item) => item.id === newItem.id);

  if (alreadyExists) return;

  const updated = [...existing, newItem];

  localStorage.setItem("favourites", JSON.stringify(updated));
};

export const getFavourites = () => {
  const data = localStorage.getItem("favourites");
  return data ? JSON.parse(data) : [];
};

export const removeFavourite = (id) => {
  const existing = getFavourites();

  const updated = existing.filter((item) => item.id !== id);

  localStorage.setItem("favourites", JSON.stringify(updated));
};
