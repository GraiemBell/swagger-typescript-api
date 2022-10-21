const _ = require("lodash");
const { config } = require("./config");
const { emojify, emoji } = require("node-emoji");

let firstLog = true;

/**
 *
 * @param {{ type: "warn" | "log" | "error", emojiName: keyof emoji, messages: unknown[] }} payload
 * @returns {void}
 */
const createLogMessage = ({ type, emojiName, messages }) => {
  if (config.silent) return;

  const emoji = emojify(emojiName);

  if (firstLog) {
    firstLog = false;
    logger.log(
      `swagger-typescript-api(${config.version}),${process.env.npm_config_user_agent || `nodejs(${process.version})`}`,
    );
  }

  console[type](
    emoji,
    " ",
    ..._.map(messages, (message) =>
      _.startsWith(message, "\n") ? `\n${emoji}   ${message.replace(/\n/, "")}` : message,
    ),
  );
};

const logger = {
  log: (...messages) =>
    createLogMessage({
      type: "log",
      emojiName: ":sparkles:",
      messages,
    }),
  event: (...messages) =>
    createLogMessage({
      type: "log",
      emojiName: ":comet: ",
      messages,
    }),
  success: (...messages) =>
    createLogMessage({
      type: "log",
      emojiName: ":white_check_mark:",
      messages,
    }),
  warn: (...messages) =>
    createLogMessage({
      type: "warn",
      emojiName: ":warning: ",
      messages,
    }),
  error: (...messages) =>
    createLogMessage({
      type: "error",
      emojiName: ":exclamation:",
      messages,
    }),
};

module.exports = {
  logger,
};
