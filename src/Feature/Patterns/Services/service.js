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
