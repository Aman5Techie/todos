export const colors = {
  progress: {
    background: "bg-yellow-100 border-yellow-300",
    text: "text-[#854D0E]",
    icon: "#D39526",
  },
  completed: {
    background: "bg-[#EEFFEC] border-[#A7E3A2]",
    text: "line-through text-[#70D467]",
    icon: "#70D467",
  },
  pending: {
    background: "bg-white border-gray-400",
    icon: "black",
  },
};

export const statusColors = {
  progress: "bg-yellow-200 text-yellow-800",
  completed: "bg-green-200 text-green-800",
  pending: "bg-red-200 text-red-800",
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, "0"); // Ensure day is always 2 digits
  const options = { month: "short" };
  const month = new Intl.DateTimeFormat("en-US", options).format(date);
  return `${day}-${month}`;
};
