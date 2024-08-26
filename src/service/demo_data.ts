export type MeetingData = {
  meeting: {
    title: string;
    category: string;
    date: number; //
    start_time: number;
    end_time: number;
    time_zone: string;
    organizer: {
      name: string;
      email: string;
    };
    invitees: Array<{
      name: string;
      email: string;
      status: "Accepted" | "Maybe" | "Declined" | "No Response";
    }>;
    notes: string;
    attachments: Array<{
      type: "image" | "document";
      url: string;
    }>;
    actions: {
      join_meeting: string;
      attendance_options: Array<"Accept" | "Maybe" | "Decline">;
    };
  };
};

export const demoGetData: MeetingData = {
  meeting: {
    title: "Zeli video meeting",
    category: "Finance update",
    date: 1724289300,
    start_time: 1724289300,
    end_time: 1724292600,
    time_zone: "Australia/Brisbane",
    organizer: {
      name: "User's name",
      email: "user@example.com",
    },
    invitees: [
      {
        name: "Alexander Montgomery",
        email: "alex@gmail.com",
        status: "Accepted",
      },
      {
        name: "Elizabeth Wellington",
        email: "e.wellington@gmail.com",
        status: "Maybe",
      },
      {
        name: "Fred Smith",
        email: "fredsmith@gmail.com",
        status: "Declined",
      },
      {
        name: "Olivia Greenwood",
        email: "olivia.greenwood@gmail.com",
        status: "No Response",
      },
    ],
    notes: "Discuss the latest financial reports for the business",
    attachments: [
      {
        type: "image",
        url: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
      },
      {
        type: "image",
        url: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg",
      },
      {
        type: "document",
        url: "https://calibre-ebook.com/downloads/demos/demo.docx",
      },
      {
        type: "document",
        url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      },
      {
        type: "document",
        url: "https://www.orimi.com/pdf-test.pdf",
      },
    ],
    actions: {
      join_meeting: "https://zeligate.ai/join-meeting",
      attendance_options: ["Accept", "Maybe", "Decline"],
    },
  },
};
