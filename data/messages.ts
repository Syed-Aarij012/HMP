export type MessageSender = "user" | "client";

export type ChatAttachment = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type ChatMessage = {
  id: number;
  sender: MessageSender;
  text: string;
  timestamp: string;
  attachments?: ChatAttachment[];
};

export type MessageConversation = {
  id: number;
  name: string;
  avatar: string;
  listDate: string;
  preview: string;
  online: boolean;
  messages: ChatMessage[];
};

export function formatMessageTimestamp(date = new Date()) {
  const time = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
  const day = date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return `${time} - ${day}`;
}

export function formatConversationDate(date = new Date()) {
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export const initialMessageConversations: MessageConversation[] = [
  {
    id: 1,
    name: "Leslie Alexander",
    avatar: "/assets/images/dashboard/rate3.png",
    listDate: "August 13, 2023",
    preview: "Lorem ipsum dolor sit amet, consectetur...",
    online: false,
    messages: [
      {
        id: 1,
        sender: "client",
        text: "Hi, is the listing still available?",
        timestamp: "10:15 AM - Aug 13, 2023",
      },
      {
        id: 2,
        sender: "user",
        text: "Yes, it is still available. Would you like to schedule a viewing?",
        timestamp: "10:20 AM - Aug 13, 2023",
      },
    ],
  },
  {
    id: 2,
    name: "Arlene McCoy",
    avatar: "/assets/images/dashboard/rate1.png",
    listDate: "August 13, 2023",
    preview: "Proin at massa suscipit sem iaculis dignissim...",
    online: true,
    messages: [
      {
        id: 1,
        sender: "user",
        text: "Dear Mr Williamson,\nI would like to send you the quotation for the Toyota Fortuner\nSrp:\nDownpayment:\nMonthly payment:\nIf you have more questions, dont hesitate to contact me via this number: 09012345678.\nIm happy to assist!",
        timestamp: "2:55 PM - Aug 17, 2026",
        attachments: [
          {
            src: "/assets/images/dashboard/attrach1.png",
            alt: "file",
            width: 60,
            height: 60,
          },
          {
            src: "/assets/images/dashboard/attrach2.png",
            alt: "file",
            width: 60,
            height: 60,
          },
        ],
      },
      {
        id: 2,
        sender: "client",
        text: "Yes",
        timestamp: "2:55 PM - Aug 17, 2026",
      },
      {
        id: 3,
        sender: "user",
        text: "Dear Mr Williamson,\nThank you for inquiring Toyota Fortuner. My name is Adam, Sales Consultant at Toyota Cubao.\nIf you are still interested in Toyota Fortuner, kindly answer “Yes” for the quotation. For any further assistance, please do not hesitate to contact me via 09012345678 or dvg.ap.ngantt1@gmail.com.\nHave a great day ahead!",
        timestamp: "2:55 PM - Aug 17, 2026",
      },
    ],
  },
  {
    id: 3,
    name: "Kristin Watson",
    avatar: "/assets/images/dashboard/rate2.png",
    listDate: "August 13, 2023",
    preview: "Sed imperdiet tortor sed magna tempus, in...",
    online: false,
    messages: [
      {
        id: 1,
        sender: "client",
        text: "Can you share more photos of the interior?",
        timestamp: "4:10 PM - Aug 12, 2023",
      },
    ],
  },
  {
    id: 4,
    name: "Cody Fisher",
    avatar: "/assets/images/dashboard/rate5.png",
    listDate: "August 13, 2023",
    preview: "Proin a augue ut leo elementum tincidunt et...",
    online: true,
    messages: [
      {
        id: 1,
        sender: "user",
        text: "Hello Cody, thanks for your interest in the BMW listing.",
        timestamp: "11:00 AM - Aug 11, 2023",
      },
    ],
  },
  {
    id: 5,
    name: "Arlene McCoy",
    avatar: "/assets/images/dashboard/rate8.png",
    listDate: "August 13, 2023",
    preview: "Fusce tempor urna dictum ante porta pretium...",
    online: false,
    messages: [
      {
        id: 1,
        sender: "client",
        text: "Is financing available for this vehicle?",
        timestamp: "9:30 AM - Aug 10, 2023",
      },
    ],
  },
  {
    id: 6,
    name: "Bessie Cooper",
    avatar: "/assets/images/dashboard/rate7.png",
    listDate: "August 13, 2023",
    preview: "Mauris facilisis ipsum elementum nulla iaculis...",
    online: false,
    messages: [
      {
        id: 1,
        sender: "client",
        text: "What is the lowest price you can offer?",
        timestamp: "3:45 PM - Aug 9, 2023",
      },
    ],
  },
  {
    id: 7,
    name: "Savannah Nguyen",
    avatar: "/assets/images/dashboard/rate6.png",
    listDate: "August 13, 2023",
    preview: "Lorem ipsum dolor sit amet, consectetur...L",
    online: true,
    messages: [
      {
        id: 1,
        sender: "user",
        text: "Hi Savannah, let me know if you need any more details.",
        timestamp: "1:20 PM - Aug 8, 2023",
      },
    ],
  },
];
