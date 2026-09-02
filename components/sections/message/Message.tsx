"use client";

import Image from "next/image";
import {
  useMemo,
  useState,
  type FormEvent,
  type KeyboardEvent,
} from "react";
import DashboardToggle from "@/components/dashboard/DashboardToggle";
import { useMobileDealerSidebar } from "@/hooks/useMobileDealerSidebar";
import {
  formatConversationDate,
  formatMessageTimestamp,
  initialMessageConversations,
  type ChatMessage,
  type MessageConversation,
} from "@/data/messages";

function truncatePreview(text: string, maxLength = 45) {
  const normalized = text.replace(/\s+/g, " ").trim();
  if (normalized.length <= maxLength) {
    return normalized;
  }

  return `${normalized.slice(0, maxLength)}...`;
}

function renderMessageText(text: string) {
  const lines = text.split("\n");

  return lines.map((line, index) => (
    <span key={`${line}-${index}`}>
      {line}
      {index < lines.length - 1 ? <br /> : null}
    </span>
  ));
}

function SearchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M14.7506 14.7506L10.8528 10.8528M10.8528 10.8528C11.9078 9.7979 12.5004 8.36711 12.5004 6.87521C12.5004 5.38331 11.9078 3.95252 10.8528 2.89759C9.7979 1.84265 8.36711 1.25 6.87521 1.25C5.38331 1.25 3.95252 1.84265 2.89759 2.89759C1.84265 3.95252 1.25 5.38331 1.25 6.87521C1.25 8.36711 1.84265 9.7979 2.89759 10.8528C3.95252 11.9078 5.38331 12.5004 6.87521 12.5004C8.36711 12.5004 9.7979 11.9078 10.8528 10.8528Z"
        stroke="#B6B6B6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AttachmentIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={21}
      viewBox="0 0 20 21"
      fill="none"
    >
      <path
        d="M16.375 11.239L8.68203 18.932C7.83811 19.7759 6.69351 20.25 5.50003 20.25C4.30655 20.25 3.16195 19.7759 2.31803 18.932C1.47411 18.0881 1 16.9435 1 15.75C1 14.5565 1.47411 13.4119 2.31803 12.568L13.258 1.62801C13.5367 1.34948 13.8675 1.12856 14.2315 0.977866C14.5956 0.827175 14.9857 0.749663 15.3797 0.749756C15.7737 0.749849 16.1639 0.827545 16.5278 0.978407C16.8918 1.12927 17.2225 1.35035 17.501 1.62901C17.7796 1.90768 18.0005 2.23847 18.1512 2.60252C18.3019 2.96656 18.3794 3.35672 18.3793 3.75072C18.3792 4.14472 18.3015 4.53484 18.1506 4.89881C17.9998 5.26278 17.7787 5.59348 17.5 5.87201L6.55203 16.82C6.26801 17.0923 5.88839 17.2411 5.49497 17.2361C5.10156 17.2311 4.72585 17.0717 4.44883 16.7924C4.1718 16.513 4.01564 16.1359 4.01399 15.7425C4.01234 15.349 4.16535 14.9707 4.44003 14.689L12.25 6.87901M6.56103 16.81L6.55103 16.82"
        stroke="#B6B6B6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ImageIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={22}
      height={17}
      viewBox="0 0 22 17"
      fill="none"
    >
      <path
        d="M1.25 12.25L6.409 7.091C6.61793 6.88206 6.86597 6.71633 7.13896 6.60325C7.41194 6.49018 7.70452 6.43198 8 6.43198C8.29548 6.43198 8.58806 6.49018 8.86104 6.60325C9.13403 6.71633 9.38207 6.88206 9.591 7.091L14.75 12.25M13.25 10.75L14.659 9.341C14.8679 9.13206 15.116 8.96633 15.389 8.85325C15.6619 8.74018 15.9545 8.68198 16.25 8.68198C16.5455 8.68198 16.8381 8.74018 17.111 8.85325C17.384 8.96633 17.6321 9.13206 17.841 9.341L20.75 12.25M2.75 16H19.25C19.6478 16 20.0294 15.842 20.3107 15.5607C20.592 15.2794 20.75 14.8978 20.75 14.5V2.5C20.75 2.10218 20.592 1.72064 20.3107 1.43934C20.0294 1.15804 19.6478 1 19.25 1H2.75C2.35218 1 1.97064 1.15804 1.68934 1.43934C1.40804 1.72064 1.25 2.10218 1.25 2.5V14.5C1.25 14.8978 1.40804 15.2794 1.68934 15.5607C1.97064 15.842 2.35218 16 2.75 16ZM13.25 4.75H13.258V4.758H13.25V4.75ZM13.625 4.75C13.625 4.84946 13.5855 4.94484 13.5152 5.01517C13.4448 5.08549 13.3495 5.125 13.25 5.125C13.1505 5.125 13.0552 5.08549 12.9848 5.01517C12.9145 4.94484 12.875 4.84946 12.875 4.75C12.875 4.65054 12.9145 4.55516 12.9848 4.48484C13.0552 4.41451 13.1505 4.375 13.25 4.375C13.3495 4.375 13.4448 4.41451 13.5152 4.48484C13.5855 4.55516 13.625 4.65054 13.625 4.75Z"
        stroke="#B6B6B6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChatMessageBubble({
  message,
  avatar,
}: {
  message: ChatMessage;
  avatar: string;
}) {
  if (message.sender === "client") {
    return (
      <div className="client-chat mb-3">
        <div className="client-inner">
          <div className="avatar">
            <Image src={avatar} alt="avatar" width={60} height={60} />
          </div>
          <div className="content">
            <p>{renderMessageText(message.text)}</p>
            <div className="date-pushlish">{message.timestamp}</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="current-user-chat mb-3">
      <div className="chat-text">
        <p>{renderMessageText(message.text)}</p>
        <div className="date-pushlish mb-3">{message.timestamp}</div>
        {message.attachments?.length ? (
          <>
            <div className="attrach">
              {message.attachments.map((attachment) => (
                <Image
                  key={attachment.src}
                  src={attachment.src}
                  alt={attachment.alt}
                  width={attachment.width}
                  height={attachment.height}
                />
              ))}
            </div>
            <div className="date-pushlish mb-3">{message.timestamp}</div>
          </>
        ) : null}
      </div>
    </div>
  );
}

function Message() {
  const { isOpen, open, close } = useMobileDealerSidebar();
  const [conversations, setConversations] = useState<MessageConversation[]>(
    initialMessageConversations,
  );
  const [activeConversationId, setActiveConversationId] = useState(2);
  const [searchQuery, setSearchQuery] = useState("");
  const [draftMessage, setDraftMessage] = useState("");

  const activeConversation = useMemo(
    () =>
      conversations.find(
        (conversation) => conversation.id === activeConversationId,
      ) ?? conversations[0],
    [conversations, activeConversationId],
  );

  const filteredConversations = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) {
      return conversations;
    }

    return conversations.filter((conversation) => {
      const haystack =
        `${conversation.name} ${conversation.preview}`.toLowerCase();
      return haystack.includes(query);
    });
  }, [conversations, searchQuery]);

  const handleSelectConversation = (conversationId: number) => {
    setActiveConversationId(conversationId);
    close();
  };

  const handleSendMessage = () => {
    const text = draftMessage.trim();
    if (!text || !activeConversation) {
      return;
    }

    const timestamp = formatMessageTimestamp();
    const listDate = formatConversationDate();
    const preview = truncatePreview(text);

    setConversations((current) =>
      current.map((conversation) => {
        if (conversation.id !== activeConversation.id) {
          return conversation;
        }

        const nextMessageId =
          conversation.messages.reduce(
            (maxId, message) => Math.max(maxId, message.id),
            0,
          ) + 1;

        return {
          ...conversation,
          listDate,
          preview,
          messages: [
            ...conversation.messages,
            {
              id: nextMessageId,
              sender: "user",
              text,
              timestamp,
            },
          ],
        };
      }),
    );

    setDraftMessage("");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSendMessage();
  };

  const handleInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      <div id="themesflat-content">
        <DashboardToggle />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="content-area">
                <main id="main" className="main-content">
                  <div className="tfcl-dashboard">
                    <div className="message-title-row mb-3">
                      <h1 className="admin-title mb-0">Message</h1>
                      <button
                        type="button"
                        className={`btn-open-list-user${isOpen ? " d-none" : ""}`}
                        aria-label="Open message list"
                        aria-expanded={isOpen}
                        onClick={open}
                      >
                        <i className="icon-carus-chattext" aria-hidden="true" />
                      </button>
                    </div>
                    <div className="tfcl-message">
                      <div
                        className={`overlay-list-user${isOpen ? " open" : ""}`}
                        onClick={close}
                        aria-hidden={!isOpen}
                      />
                      <div
                        className={`content-left list-user${isOpen ? " open" : ""}`}
                      >
                        <button
                          type="button"
                          className="icon-close-list-user"
                          aria-label="Close message list"
                          onClick={close}
                        >
                          <i className="icon-carus-close" aria-hidden="true" />
                        </button>
                        <div className="message-user">
                          <div className="message-header">
                            <label
                              className="fs-18 fw-5 text-color-2"
                              htmlFor="message-search"
                            >
                              Search
                            </label>
                            <div className="form-search">
                              <input
                                type="search"
                                className="form-control"
                                id="message-search"
                                name="message_search"
                                placeholder="Search..."
                                value={searchQuery}
                                onChange={(event) =>
                                  setSearchQuery(event.target.value)
                                }
                              />
                              <SearchIcon />
                            </div>
                          </div>
                        </div>
                        <ul className="list-user-chat">
                          {filteredConversations.map((conversation) => (
                            <li
                              key={conversation.id}
                              className={
                                conversation.id === activeConversationId
                                  ? "active"
                                  : undefined
                              }
                            >
                              <button
                                type="button"
                                className="user-item"
                                onClick={() =>
                                  handleSelectConversation(conversation.id)
                                }
                              >
                                <div className="avatar">
                                  <Image
                                    src={conversation.avatar}
                                    alt={conversation.name}
                                    width={60}
                                    height={60}
                                  />
                                </div>
                                <div className="content">
                                  <div className="inner">
                                    <div className="name">{conversation.name}</div>
                                    <span className="date">
                                      {conversation.listDate}
                                    </span>
                                  </div>
                                  <p>{conversation.preview}</p>
                                </div>
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                      {activeConversation ? (
                        <div className="content-right">
                          <div className="header-inner-chat">
                            <div className="user-infor">
                              <div className="avatar">
                                <Image
                                  src={activeConversation.avatar}
                                  alt={activeConversation.name}
                                  width={60}
                                  height={60}
                                />
                              </div>
                              <div className="content">
                                <div className="inner">
                                  <div className="name">
                                    {activeConversation.name}
                                  </div>
                                  <span className="nofi">
                                    {activeConversation.online
                                      ? "Online"
                                      : "Offline"}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="content-inner-chat">
                            {activeConversation.messages.map((message) => (
                              <ChatMessageBubble
                                key={message.id}
                                message={message}
                                avatar={activeConversation.avatar}
                              />
                            ))}
                            <form
                              className="controller-chat"
                              onSubmit={handleSubmit}
                            >
                              <div className="form-message">
                                <input
                                  type="text"
                                  className="form-control"
                                  name="message"
                                  placeholder="Aa"
                                  value={draftMessage}
                                  onChange={(event) =>
                                    setDraftMessage(event.target.value)
                                  }
                                  onKeyDown={handleInputKeyDown}
                                />
                                <button type="submit">Send</button>
                              </div>
                              <div className="controll">
                                <button type="button" className="file">
                                  <AttachmentIcon />
                                </button>
                                <button type="button" className="image">
                                  <ImageIcon />
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </main>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Message;
