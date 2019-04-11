import * as $protobuf from "protobufjs";
/** Namespace dhl. */
export namespace dhl {

    /** DHLRequestType enum. */
    enum DHLRequestType {
        Normal = 0,
        AgentList = 1,
        WelcomeMessage = 2
    }

    /** Properties of a DHLAgentInfo. */
    interface IDHLAgentInfo {

        /** DHLAgentInfo id */
        id?: (string|null);

        /** DHLAgentInfo name */
        name?: (string|null);

        /** DHLAgentInfo org */
        org?: (string|null);

        /** DHLAgentInfo description */
        description?: (string|null);

        /** DHLAgentInfo iconUrl */
        iconUrl?: (string|null);

        /** DHLAgentInfo type */
        type?: (string|null);
    }

    /** Represents a DHLAgentInfo. */
    class DHLAgentInfo implements IDHLAgentInfo {

        /**
         * Constructs a new DHLAgentInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: dhl.IDHLAgentInfo);

        /** DHLAgentInfo id. */
        public id: string;

        /** DHLAgentInfo name. */
        public name: string;

        /** DHLAgentInfo org. */
        public org: string;

        /** DHLAgentInfo description. */
        public description: string;

        /** DHLAgentInfo iconUrl. */
        public iconUrl: string;

        /** DHLAgentInfo type. */
        public type: string;

        /**
         * Creates a new DHLAgentInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DHLAgentInfo instance
         */
        public static create(properties?: dhl.IDHLAgentInfo): dhl.DHLAgentInfo;

        /**
         * Encodes the specified DHLAgentInfo message. Does not implicitly {@link dhl.DHLAgentInfo.verify|verify} messages.
         * @param message DHLAgentInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dhl.IDHLAgentInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DHLAgentInfo message, length delimited. Does not implicitly {@link dhl.DHLAgentInfo.verify|verify} messages.
         * @param message DHLAgentInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dhl.IDHLAgentInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DHLAgentInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DHLAgentInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dhl.DHLAgentInfo;

        /**
         * Decodes a DHLAgentInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DHLAgentInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dhl.DHLAgentInfo;

        /**
         * Verifies a DHLAgentInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DHLAgentInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DHLAgentInfo
         */
        public static fromObject(object: { [k: string]: any }): dhl.DHLAgentInfo;

        /**
         * Creates a plain object from a DHLAgentInfo message. Also converts values to other types if specified.
         * @param message DHLAgentInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dhl.DHLAgentInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DHLAgentInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DHLAgentResponse. */
    interface IDHLAgentResponse {

        /** DHLAgentResponse agentList */
        agentList?: (dhl.IDHLAgentInfo[]|null);
    }

    /** Represents a DHLAgentResponse. */
    class DHLAgentResponse implements IDHLAgentResponse {

        /**
         * Constructs a new DHLAgentResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: dhl.IDHLAgentResponse);

        /** DHLAgentResponse agentList. */
        public agentList: dhl.IDHLAgentInfo[];

        /**
         * Creates a new DHLAgentResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DHLAgentResponse instance
         */
        public static create(properties?: dhl.IDHLAgentResponse): dhl.DHLAgentResponse;

        /**
         * Encodes the specified DHLAgentResponse message. Does not implicitly {@link dhl.DHLAgentResponse.verify|verify} messages.
         * @param message DHLAgentResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dhl.IDHLAgentResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DHLAgentResponse message, length delimited. Does not implicitly {@link dhl.DHLAgentResponse.verify|verify} messages.
         * @param message DHLAgentResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dhl.IDHLAgentResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DHLAgentResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DHLAgentResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dhl.DHLAgentResponse;

        /**
         * Decodes a DHLAgentResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DHLAgentResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dhl.DHLAgentResponse;

        /**
         * Verifies a DHLAgentResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DHLAgentResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DHLAgentResponse
         */
        public static fromObject(object: { [k: string]: any }): dhl.DHLAgentResponse;

        /**
         * Creates a plain object from a DHLAgentResponse message. Also converts values to other types if specified.
         * @param message DHLAgentResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dhl.DHLAgentResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DHLAgentResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DHLCardResponse. */
    interface IDHLCardResponse {

        /** DHLCardResponse title */
        title?: (string|null);

        /** DHLCardResponse description */
        description?: (string|null);

        /** DHLCardResponse imageUrl */
        imageUrl?: (string|null);

        /** DHLCardResponse deepLink */
        deepLink?: (string|null);

        /** DHLCardResponse script */
        script?: (string|null);

        /** DHLCardResponse preCardText */
        preCardText?: (string|null);

        /** DHLCardResponse postCardText */
        postCardText?: (string|null);

        /** DHLCardResponse coreference */
        coreference?: (string|null);
    }

    /** Represents a DHLCardResponse. */
    class DHLCardResponse implements IDHLCardResponse {

        /**
         * Constructs a new DHLCardResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: dhl.IDHLCardResponse);

        /** DHLCardResponse title. */
        public title: string;

        /** DHLCardResponse description. */
        public description: string;

        /** DHLCardResponse imageUrl. */
        public imageUrl: string;

        /** DHLCardResponse deepLink. */
        public deepLink: string;

        /** DHLCardResponse script. */
        public script: string;

        /** DHLCardResponse preCardText. */
        public preCardText: string;

        /** DHLCardResponse postCardText. */
        public postCardText: string;

        /** DHLCardResponse coreference. */
        public coreference: string;

        /**
         * Creates a new DHLCardResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DHLCardResponse instance
         */
        public static create(properties?: dhl.IDHLCardResponse): dhl.DHLCardResponse;

        /**
         * Encodes the specified DHLCardResponse message. Does not implicitly {@link dhl.DHLCardResponse.verify|verify} messages.
         * @param message DHLCardResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dhl.IDHLCardResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DHLCardResponse message, length delimited. Does not implicitly {@link dhl.DHLCardResponse.verify|verify} messages.
         * @param message DHLCardResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dhl.IDHLCardResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DHLCardResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DHLCardResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dhl.DHLCardResponse;

        /**
         * Decodes a DHLCardResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DHLCardResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dhl.DHLCardResponse;

        /**
         * Verifies a DHLCardResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DHLCardResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DHLCardResponse
         */
        public static fromObject(object: { [k: string]: any }): dhl.DHLCardResponse;

        /**
         * Creates a plain object from a DHLCardResponse message. Also converts values to other types if specified.
         * @param message DHLCardResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dhl.DHLCardResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DHLCardResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Script. */
    interface IScript {

        /** Script textResponse */
        textResponse?: (string|null);

        /** Script cardResponse */
        cardResponse?: (dhl.IDHLCardResponse|null);

        /** Script agentResponse */
        agentResponse?: (dhl.IDHLAgentResponse|null);
    }

    /** Represents a Script. */
    class Script implements IScript {

        /**
         * Constructs a new Script.
         * @param [properties] Properties to set
         */
        constructor(properties?: dhl.IScript);

        /** Script textResponse. */
        public textResponse: string;

        /** Script cardResponse. */
        public cardResponse?: (dhl.IDHLCardResponse|null);

        /** Script agentResponse. */
        public agentResponse?: (dhl.IDHLAgentResponse|null);

        /** Script scriptData. */
        public scriptData?: ("textResponse"|"cardResponse"|"agentResponse");

        /**
         * Creates a new Script instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Script instance
         */
        public static create(properties?: dhl.IScript): dhl.Script;

        /**
         * Encodes the specified Script message. Does not implicitly {@link dhl.Script.verify|verify} messages.
         * @param message Script message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dhl.IScript, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Script message, length delimited. Does not implicitly {@link dhl.Script.verify|verify} messages.
         * @param message Script message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dhl.IScript, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Script message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Script
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dhl.Script;

        /**
         * Decodes a Script message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Script
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dhl.Script;

        /**
         * Verifies a Script message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Script message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Script
         */
        public static fromObject(object: { [k: string]: any }): dhl.Script;

        /**
         * Creates a plain object from a Script message. Also converts values to other types if specified.
         * @param message Script
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dhl.Script, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Script to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RepeatedCardResponse. */
    interface IRepeatedCardResponse {

        /** RepeatedCardResponse header */
        header?: (string|null);

        /** RepeatedCardResponse cardMsgs */
        cardMsgs?: (dhl.IDHLCardResponse[]|null);

        /** RepeatedCardResponse useCoreference */
        useCoreference?: (boolean|null);
    }

    /** Represents a RepeatedCardResponse. */
    class RepeatedCardResponse implements IRepeatedCardResponse {

        /**
         * Constructs a new RepeatedCardResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: dhl.IRepeatedCardResponse);

        /** RepeatedCardResponse header. */
        public header: string;

        /** RepeatedCardResponse cardMsgs. */
        public cardMsgs: dhl.IDHLCardResponse[];

        /** RepeatedCardResponse useCoreference. */
        public useCoreference: boolean;

        /**
         * Creates a new RepeatedCardResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RepeatedCardResponse instance
         */
        public static create(properties?: dhl.IRepeatedCardResponse): dhl.RepeatedCardResponse;

        /**
         * Encodes the specified RepeatedCardResponse message. Does not implicitly {@link dhl.RepeatedCardResponse.verify|verify} messages.
         * @param message RepeatedCardResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dhl.IRepeatedCardResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RepeatedCardResponse message, length delimited. Does not implicitly {@link dhl.RepeatedCardResponse.verify|verify} messages.
         * @param message RepeatedCardResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dhl.IRepeatedCardResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RepeatedCardResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RepeatedCardResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dhl.RepeatedCardResponse;

        /**
         * Decodes a RepeatedCardResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RepeatedCardResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dhl.RepeatedCardResponse;

        /**
         * Verifies a RepeatedCardResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RepeatedCardResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RepeatedCardResponse
         */
        public static fromObject(object: { [k: string]: any }): dhl.RepeatedCardResponse;

        /**
         * Creates a plain object from a RepeatedCardResponse message. Also converts values to other types if specified.
         * @param message RepeatedCardResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dhl.RepeatedCardResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RepeatedCardResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TextListItem. */
    interface ITextListItem {

        /** TextListItem content1 */
        content1?: (string|null);

        /** TextListItem content2 */
        content2?: (string|null);

        /** TextListItem content3 */
        content3?: (string|null);

        /** TextListItem coreference */
        coreference?: (string|null);
    }

    /** Represents a TextListItem. */
    class TextListItem implements ITextListItem {

        /**
         * Constructs a new TextListItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: dhl.ITextListItem);

        /** TextListItem content1. */
        public content1: string;

        /** TextListItem content2. */
        public content2: string;

        /** TextListItem content3. */
        public content3: string;

        /** TextListItem coreference. */
        public coreference: string;

        /**
         * Creates a new TextListItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TextListItem instance
         */
        public static create(properties?: dhl.ITextListItem): dhl.TextListItem;

        /**
         * Encodes the specified TextListItem message. Does not implicitly {@link dhl.TextListItem.verify|verify} messages.
         * @param message TextListItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dhl.ITextListItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TextListItem message, length delimited. Does not implicitly {@link dhl.TextListItem.verify|verify} messages.
         * @param message TextListItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dhl.ITextListItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TextListItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TextListItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dhl.TextListItem;

        /**
         * Decodes a TextListItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TextListItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dhl.TextListItem;

        /**
         * Verifies a TextListItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TextListItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TextListItem
         */
        public static fromObject(object: { [k: string]: any }): dhl.TextListItem;

        /**
         * Creates a plain object from a TextListItem message. Also converts values to other types if specified.
         * @param message TextListItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dhl.TextListItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TextListItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RepeatedTextResponse. */
    interface IRepeatedTextResponse {

        /** RepeatedTextResponse msg */
        msg?: (string[]|null);

        /** RepeatedTextResponse header */
        header?: (string|null);

        /** RepeatedTextResponse textList */
        textList?: (dhl.ITextListItem[]|null);

        /** RepeatedTextResponse useCoreference */
        useCoreference?: (boolean|null);
    }

    /** Represents a RepeatedTextResponse. */
    class RepeatedTextResponse implements IRepeatedTextResponse {

        /**
         * Constructs a new RepeatedTextResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: dhl.IRepeatedTextResponse);

        /** RepeatedTextResponse msg. */
        public msg: string[];

        /** RepeatedTextResponse header. */
        public header: string;

        /** RepeatedTextResponse textList. */
        public textList: dhl.ITextListItem[];

        /** RepeatedTextResponse useCoreference. */
        public useCoreference: boolean;

        /**
         * Creates a new RepeatedTextResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RepeatedTextResponse instance
         */
        public static create(properties?: dhl.IRepeatedTextResponse): dhl.RepeatedTextResponse;

        /**
         * Encodes the specified RepeatedTextResponse message. Does not implicitly {@link dhl.RepeatedTextResponse.verify|verify} messages.
         * @param message RepeatedTextResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dhl.IRepeatedTextResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RepeatedTextResponse message, length delimited. Does not implicitly {@link dhl.RepeatedTextResponse.verify|verify} messages.
         * @param message RepeatedTextResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dhl.IRepeatedTextResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RepeatedTextResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RepeatedTextResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dhl.RepeatedTextResponse;

        /**
         * Decodes a RepeatedTextResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RepeatedTextResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dhl.RepeatedTextResponse;

        /**
         * Verifies a RepeatedTextResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RepeatedTextResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RepeatedTextResponse
         */
        public static fromObject(object: { [k: string]: any }): dhl.RepeatedTextResponse;

        /**
         * Creates a plain object from a RepeatedTextResponse message. Also converts values to other types if specified.
         * @param message RepeatedTextResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dhl.RepeatedTextResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RepeatedTextResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ChatMessage. */
    interface IChatMessage {

        /** ChatMessage textMsg */
        textMsg?: (string|null);

        /** ChatMessage cardMsg */
        cardMsg?: (dhl.IDHLCardResponse|null);

        /** ChatMessage imageResponseUrl */
        imageResponseUrl?: (string|null);

        /** ChatMessage textListMsg */
        textListMsg?: (dhl.IRepeatedTextResponse|null);

        /** ChatMessage cardListMsg */
        cardListMsg?: (dhl.IRepeatedCardResponse|null);
    }

    /** Represents a ChatMessage. */
    class ChatMessage implements IChatMessage {

        /**
         * Constructs a new ChatMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: dhl.IChatMessage);

        /** ChatMessage textMsg. */
        public textMsg: string;

        /** ChatMessage cardMsg. */
        public cardMsg?: (dhl.IDHLCardResponse|null);

        /** ChatMessage imageResponseUrl. */
        public imageResponseUrl: string;

        /** ChatMessage textListMsg. */
        public textListMsg?: (dhl.IRepeatedTextResponse|null);

        /** ChatMessage cardListMsg. */
        public cardListMsg?: (dhl.IRepeatedCardResponse|null);

        /** ChatMessage chatMessage. */
        public chatMessage?: ("textMsg"|"cardMsg"|"imageResponseUrl"|"textListMsg"|"cardListMsg");

        /**
         * Creates a new ChatMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChatMessage instance
         */
        public static create(properties?: dhl.IChatMessage): dhl.ChatMessage;

        /**
         * Encodes the specified ChatMessage message. Does not implicitly {@link dhl.ChatMessage.verify|verify} messages.
         * @param message ChatMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dhl.IChatMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChatMessage message, length delimited. Does not implicitly {@link dhl.ChatMessage.verify|verify} messages.
         * @param message ChatMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dhl.IChatMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChatMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChatMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dhl.ChatMessage;

        /**
         * Decodes a ChatMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChatMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dhl.ChatMessage;

        /**
         * Verifies a ChatMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChatMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChatMessage
         */
        public static fromObject(object: { [k: string]: any }): dhl.ChatMessage;

        /**
         * Creates a plain object from a ChatMessage message. Also converts values to other types if specified.
         * @param message ChatMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dhl.ChatMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChatMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DHLChatResponse. */
    interface IDHLChatResponse {

        /** DHLChatResponse msgs */
        msgs?: (dhl.IChatMessage[]|null);

        /** DHLChatResponse candidates */
        candidates?: (string[]|null);
    }

    /** Represents a DHLChatResponse. */
    class DHLChatResponse implements IDHLChatResponse {

        /**
         * Constructs a new DHLChatResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: dhl.IDHLChatResponse);

        /** DHLChatResponse msgs. */
        public msgs: dhl.IChatMessage[];

        /** DHLChatResponse candidates. */
        public candidates: string[];

        /**
         * Creates a new DHLChatResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DHLChatResponse instance
         */
        public static create(properties?: dhl.IDHLChatResponse): dhl.DHLChatResponse;

        /**
         * Encodes the specified DHLChatResponse message. Does not implicitly {@link dhl.DHLChatResponse.verify|verify} messages.
         * @param message DHLChatResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dhl.IDHLChatResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DHLChatResponse message, length delimited. Does not implicitly {@link dhl.DHLChatResponse.verify|verify} messages.
         * @param message DHLChatResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dhl.IDHLChatResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DHLChatResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DHLChatResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dhl.DHLChatResponse;

        /**
         * Decodes a DHLChatResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DHLChatResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dhl.DHLChatResponse;

        /**
         * Verifies a DHLChatResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DHLChatResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DHLChatResponse
         */
        public static fromObject(object: { [k: string]: any }): dhl.DHLChatResponse;

        /**
         * Creates a plain object from a DHLChatResponse message. Also converts values to other types if specified.
         * @param message DHLChatResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dhl.DHLChatResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DHLChatResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SuggestedValues. */
    interface ISuggestedValues {

        /** SuggestedValues text */
        text?: (string|null);
    }

    /** Represents a SuggestedValues. */
    class SuggestedValues implements ISuggestedValues {

        /**
         * Constructs a new SuggestedValues.
         * @param [properties] Properties to set
         */
        constructor(properties?: dhl.ISuggestedValues);

        /** SuggestedValues text. */
        public text: string;

        /** SuggestedValues value. */
        public value?: "text";

        /**
         * Creates a new SuggestedValues instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SuggestedValues instance
         */
        public static create(properties?: dhl.ISuggestedValues): dhl.SuggestedValues;

        /**
         * Encodes the specified SuggestedValues message. Does not implicitly {@link dhl.SuggestedValues.verify|verify} messages.
         * @param message SuggestedValues message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dhl.ISuggestedValues, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SuggestedValues message, length delimited. Does not implicitly {@link dhl.SuggestedValues.verify|verify} messages.
         * @param message SuggestedValues message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dhl.ISuggestedValues, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SuggestedValues message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SuggestedValues
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dhl.SuggestedValues;

        /**
         * Decodes a SuggestedValues message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SuggestedValues
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dhl.SuggestedValues;

        /**
         * Verifies a SuggestedValues message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SuggestedValues message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SuggestedValues
         */
        public static fromObject(object: { [k: string]: any }): dhl.SuggestedValues;

        /**
         * Creates a plain object from a SuggestedValues message. Also converts values to other types if specified.
         * @param message SuggestedValues
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dhl.SuggestedValues, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SuggestedValues to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DHLScript. */
    interface IDHLScript {

        /** DHLScript script */
        script?: (dhl.IScript|null);

        /** DHLScript candidates */
        candidates?: (string[]|null);

        /** DHLScript modifiedQuery */
        modifiedQuery?: (string|null);

        /** DHLScript message */
        message?: (string|null);

        /** DHLScript agentResponse */
        agentResponse?: (dhl.IDHLAgentResponse|null);

        /** DHLScript chatResponse */
        chatResponse?: (dhl.IDHLChatResponse|null);

        /** DHLScript suggestedValues */
        suggestedValues?: (dhl.ISuggestedValues[]|null);
    }

    /** Represents a DHLScript. */
    class DHLScript implements IDHLScript {

        /**
         * Constructs a new DHLScript.
         * @param [properties] Properties to set
         */
        constructor(properties?: dhl.IDHLScript);

        /** DHLScript script. */
        public script?: (dhl.IScript|null);

        /** DHLScript candidates. */
        public candidates: string[];

        /** DHLScript modifiedQuery. */
        public modifiedQuery: string;

        /** DHLScript message. */
        public message: string;

        /** DHLScript agentResponse. */
        public agentResponse?: (dhl.IDHLAgentResponse|null);

        /** DHLScript chatResponse. */
        public chatResponse?: (dhl.IDHLChatResponse|null);

        /** DHLScript suggestedValues. */
        public suggestedValues: dhl.ISuggestedValues[];

        /** DHLScript dhlResponse. */
        public dhlResponse?: ("agentResponse"|"chatResponse");

        /**
         * Creates a new DHLScript instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DHLScript instance
         */
        public static create(properties?: dhl.IDHLScript): dhl.DHLScript;

        /**
         * Encodes the specified DHLScript message. Does not implicitly {@link dhl.DHLScript.verify|verify} messages.
         * @param message DHLScript message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dhl.IDHLScript, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DHLScript message, length delimited. Does not implicitly {@link dhl.DHLScript.verify|verify} messages.
         * @param message DHLScript message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dhl.IDHLScript, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DHLScript message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DHLScript
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dhl.DHLScript;

        /**
         * Decodes a DHLScript message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DHLScript
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dhl.DHLScript;

        /**
         * Verifies a DHLScript message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DHLScript message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DHLScript
         */
        public static fromObject(object: { [k: string]: any }): dhl.DHLScript;

        /**
         * Creates a plain object from a DHLScript message. Also converts values to other types if specified.
         * @param message DHLScript
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dhl.DHLScript, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DHLScript to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DynamicEntityValue. */
    interface IDynamicEntityValue {

        /** DynamicEntityValue keyword */
        keyword?: (string|null);

        /** DynamicEntityValue aliases */
        aliases?: (string[]|null);
    }

    /** Represents a DynamicEntityValue. */
    class DynamicEntityValue implements IDynamicEntityValue {

        /**
         * Constructs a new DynamicEntityValue.
         * @param [properties] Properties to set
         */
        constructor(properties?: dhl.IDynamicEntityValue);

        /** DynamicEntityValue keyword. */
        public keyword: string;

        /** DynamicEntityValue aliases. */
        public aliases: string[];

        /**
         * Creates a new DynamicEntityValue instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DynamicEntityValue instance
         */
        public static create(properties?: dhl.IDynamicEntityValue): dhl.DynamicEntityValue;

        /**
         * Encodes the specified DynamicEntityValue message. Does not implicitly {@link dhl.DynamicEntityValue.verify|verify} messages.
         * @param message DynamicEntityValue message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dhl.IDynamicEntityValue, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DynamicEntityValue message, length delimited. Does not implicitly {@link dhl.DynamicEntityValue.verify|verify} messages.
         * @param message DynamicEntityValue message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dhl.IDynamicEntityValue, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DynamicEntityValue message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DynamicEntityValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dhl.DynamicEntityValue;

        /**
         * Decodes a DynamicEntityValue message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DynamicEntityValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dhl.DynamicEntityValue;

        /**
         * Verifies a DynamicEntityValue message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DynamicEntityValue message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DynamicEntityValue
         */
        public static fromObject(object: { [k: string]: any }): dhl.DynamicEntityValue;

        /**
         * Creates a plain object from a DynamicEntityValue message. Also converts values to other types if specified.
         * @param message DynamicEntityValue
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dhl.DynamicEntityValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DynamicEntityValue to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DynamicEntity. */
    interface IDynamicEntity {

        /** DynamicEntity typeName */
        typeName?: (string|null);

        /** DynamicEntity values */
        values?: (dhl.IDynamicEntityValue[]|null);
    }

    /** Represents a DynamicEntity. */
    class DynamicEntity implements IDynamicEntity {

        /**
         * Constructs a new DynamicEntity.
         * @param [properties] Properties to set
         */
        constructor(properties?: dhl.IDynamicEntity);

        /** DynamicEntity typeName. */
        public typeName: string;

        /** DynamicEntity values. */
        public values: dhl.IDynamicEntityValue[];

        /**
         * Creates a new DynamicEntity instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DynamicEntity instance
         */
        public static create(properties?: dhl.IDynamicEntity): dhl.DynamicEntity;

        /**
         * Encodes the specified DynamicEntity message. Does not implicitly {@link dhl.DynamicEntity.verify|verify} messages.
         * @param message DynamicEntity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dhl.IDynamicEntity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DynamicEntity message, length delimited. Does not implicitly {@link dhl.DynamicEntity.verify|verify} messages.
         * @param message DynamicEntity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dhl.IDynamicEntity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DynamicEntity message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DynamicEntity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dhl.DynamicEntity;

        /**
         * Decodes a DynamicEntity message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DynamicEntity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dhl.DynamicEntity;

        /**
         * Verifies a DynamicEntity message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DynamicEntity message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DynamicEntity
         */
        public static fromObject(object: { [k: string]: any }): dhl.DynamicEntity;

        /**
         * Creates a plain object from a DynamicEntity message. Also converts values to other types if specified.
         * @param message DynamicEntity
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dhl.DynamicEntity, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DynamicEntity to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FilledAttribute. */
    interface IFilledAttribute {

        /** FilledAttribute name */
        name?: (string|null);

        /** FilledAttribute value */
        value?: (string|null);

        /** FilledAttribute timestamp */
        timestamp?: (number|Long|null);
    }

    /** Represents a FilledAttribute. */
    class FilledAttribute implements IFilledAttribute {

        /**
         * Constructs a new FilledAttribute.
         * @param [properties] Properties to set
         */
        constructor(properties?: dhl.IFilledAttribute);

        /** FilledAttribute name. */
        public name: string;

        /** FilledAttribute value. */
        public value: string;

        /** FilledAttribute timestamp. */
        public timestamp: (number|Long);

        /**
         * Creates a new FilledAttribute instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FilledAttribute instance
         */
        public static create(properties?: dhl.IFilledAttribute): dhl.FilledAttribute;

        /**
         * Encodes the specified FilledAttribute message. Does not implicitly {@link dhl.FilledAttribute.verify|verify} messages.
         * @param message FilledAttribute message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dhl.IFilledAttribute, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FilledAttribute message, length delimited. Does not implicitly {@link dhl.FilledAttribute.verify|verify} messages.
         * @param message FilledAttribute message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dhl.IFilledAttribute, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FilledAttribute message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FilledAttribute
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dhl.FilledAttribute;

        /**
         * Decodes a FilledAttribute message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FilledAttribute
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dhl.FilledAttribute;

        /**
         * Verifies a FilledAttribute message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FilledAttribute message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FilledAttribute
         */
        public static fromObject(object: { [k: string]: any }): dhl.FilledAttribute;

        /**
         * Creates a plain object from a FilledAttribute message. Also converts values to other types if specified.
         * @param message FilledAttribute
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dhl.FilledAttribute, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FilledAttribute to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace dhlmixer. */
export namespace dhlmixer {

    /** Represents a DHLMixer */
    class DHLMixer extends $protobuf.rpc.Service {

        /**
         * Constructs a new DHLMixer service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new DHLMixer service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): DHLMixer;

        /**
         * Calls SendMessage.
         * @param request DHLMixerRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and DHLMixerError
         */
        public sendMessage(request: dhlmixer.IDHLMixerRequest, callback: dhlmixer.DHLMixer.SendMessageCallback): void;

        /**
         * Calls SendMessage.
         * @param request DHLMixerRequest message or plain object
         * @returns Promise
         */
        public sendMessage(request: dhlmixer.IDHLMixerRequest): Promise<dhlmixer.DHLMixerError>;

        /**
         * Calls PollForResponse.
         * @param request KerfuPollRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and DHLMixerResponse
         */
        public pollForResponse(request: dhlmixer.IKerfuPollRequest, callback: dhlmixer.DHLMixer.PollForResponseCallback): void;

        /**
         * Calls PollForResponse.
         * @param request KerfuPollRequest message or plain object
         * @returns Promise
         */
        public pollForResponse(request: dhlmixer.IKerfuPollRequest): Promise<dhlmixer.DHLMixerResponse>;

        /**
         * Calls SendKerfuMessage.
         * @param request KerfuMessageDep message or plain object
         * @param callback Node-style callback called with the error, if any, and DHLMixerError
         */
        public sendKerfuMessage(request: dhlmixer.IKerfuMessageDep, callback: dhlmixer.DHLMixer.SendKerfuMessageCallback): void;

        /**
         * Calls SendKerfuMessage.
         * @param request KerfuMessageDep message or plain object
         * @returns Promise
         */
        public sendKerfuMessage(request: dhlmixer.IKerfuMessageDep): Promise<dhlmixer.DHLMixerError>;

        /**
         * Calls PollForKerfuMessage.
         * @param request KerfuPollRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and KerfuMessageDep
         */
        public pollForKerfuMessage(request: dhlmixer.IKerfuPollRequest, callback: dhlmixer.DHLMixer.PollForKerfuMessageCallback): void;

        /**
         * Calls PollForKerfuMessage.
         * @param request KerfuPollRequest message or plain object
         * @returns Promise
         */
        public pollForKerfuMessage(request: dhlmixer.IKerfuPollRequest): Promise<dhlmixer.KerfuMessageDep>;

        /**
         * Calls Speech.
         * @param request SpeechData message or plain object
         * @param callback Node-style callback called with the error, if any, and SpeechResult
         */
        public speech(request: dhlmixer.ISpeechData, callback: dhlmixer.DHLMixer.SpeechCallback): void;

        /**
         * Calls Speech.
         * @param request SpeechData message or plain object
         * @returns Promise
         */
        public speech(request: dhlmixer.ISpeechData): Promise<dhlmixer.SpeechResult>;

        /**
         * Calls SendVerificationSms.
         * @param request SendSMSRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and KerfuError
         */
        public sendVerificationSms(request: dhlmixer.ISendSMSRequest, callback: dhlmixer.DHLMixer.SendVerificationSmsCallback): void;

        /**
         * Calls SendVerificationSms.
         * @param request SendSMSRequest message or plain object
         * @returns Promise
         */
        public sendVerificationSms(request: dhlmixer.ISendSMSRequest): Promise<dhlmixer.KerfuError>;

        /**
         * Calls LoginWithVerificationCode.
         * @param request LoginRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and LoginResponse
         */
        public loginWithVerificationCode(request: dhlmixer.ILoginRequest, callback: dhlmixer.DHLMixer.LoginWithVerificationCodeCallback): void;

        /**
         * Calls LoginWithVerificationCode.
         * @param request LoginRequest message or plain object
         * @returns Promise
         */
        public loginWithVerificationCode(request: dhlmixer.ILoginRequest): Promise<dhlmixer.LoginResponse>;

        /**
         * Calls QueryWithVoice.
         * @param request SpeechData message or plain object
         * @param callback Node-style callback called with the error, if any, and SpeechResult
         */
        public queryWithVoice(request: dhlmixer.ISpeechData, callback: dhlmixer.DHLMixer.QueryWithVoiceCallback): void;

        /**
         * Calls QueryWithVoice.
         * @param request SpeechData message or plain object
         * @returns Promise
         */
        public queryWithVoice(request: dhlmixer.ISpeechData): Promise<dhlmixer.SpeechResult>;

        /**
         * Calls QueryWithKerfuMessage.
         * @param request KerfuMessage message or plain object
         * @param callback Node-style callback called with the error, if any, and KerfuResponse
         */
        public queryWithKerfuMessage(request: dhlmixer.IKerfuMessage, callback: dhlmixer.DHLMixer.QueryWithKerfuMessageCallback): void;

        /**
         * Calls QueryWithKerfuMessage.
         * @param request KerfuMessage message or plain object
         * @returns Promise
         */
        public queryWithKerfuMessage(request: dhlmixer.IKerfuMessage): Promise<dhlmixer.KerfuResponse>;

        /**
         * Calls GetKerfuMessages.
         * @param request KerfuMessageFilter message or plain object
         * @param callback Node-style callback called with the error, if any, and KerfuMessageList
         */
        public getKerfuMessages(request: dhlmixer.IKerfuMessageFilter, callback: dhlmixer.DHLMixer.GetKerfuMessagesCallback): void;

        /**
         * Calls GetKerfuMessages.
         * @param request KerfuMessageFilter message or plain object
         * @returns Promise
         */
        public getKerfuMessages(request: dhlmixer.IKerfuMessageFilter): Promise<dhlmixer.KerfuMessageList>;

        /**
         * Calls EventConnection.
         * @param request KerfuAction message or plain object
         * @param callback Node-style callback called with the error, if any, and KerfuEvent
         */
        public eventConnection(request: dhlmixer.IKerfuAction, callback: dhlmixer.DHLMixer.EventConnectionCallback): void;

        /**
         * Calls EventConnection.
         * @param request KerfuAction message or plain object
         * @returns Promise
         */
        public eventConnection(request: dhlmixer.IKerfuAction): Promise<dhlmixer.KerfuEvent>;

        /**
         * Calls SendKerfuResponseProactively.
         * @param request KerfuMessage message or plain object
         * @param callback Node-style callback called with the error, if any, and KerfuMessageAck
         */
        public sendKerfuResponseProactively(request: dhlmixer.IKerfuMessage, callback: dhlmixer.DHLMixer.SendKerfuResponseProactivelyCallback): void;

        /**
         * Calls SendKerfuResponseProactively.
         * @param request KerfuMessage message or plain object
         * @returns Promise
         */
        public sendKerfuResponseProactively(request: dhlmixer.IKerfuMessage): Promise<dhlmixer.KerfuMessageAck>;

        /**
         * Calls GetAccessToken.
         * @param request AuthenticationParams message or plain object
         * @param callback Node-style callback called with the error, if any, and AccessToken
         */
        public getAccessToken(request: dhlmixer.IAuthenticationParams, callback: dhlmixer.DHLMixer.GetAccessTokenCallback): void;

        /**
         * Calls GetAccessToken.
         * @param request AuthenticationParams message or plain object
         * @returns Promise
         */
        public getAccessToken(request: dhlmixer.IAuthenticationParams): Promise<dhlmixer.AccessToken>;
    }

    namespace DHLMixer {

        /**
         * Callback as used by {@link dhlmixer.DHLMixer#sendMessage}.
         * @param error Error, if any
         * @param [response] DHLMixerError
         */
        type SendMessageCallback = (error: (Error|null), response?: dhlmixer.DHLMixerError) => void;

        /**
         * Callback as used by {@link dhlmixer.DHLMixer#pollForResponse}.
         * @param error Error, if any
         * @param [response] DHLMixerResponse
         */
        type PollForResponseCallback = (error: (Error|null), response?: dhlmixer.DHLMixerResponse) => void;

        /**
         * Callback as used by {@link dhlmixer.DHLMixer#sendKerfuMessage}.
         * @param error Error, if any
         * @param [response] DHLMixerError
         */
        type SendKerfuMessageCallback = (error: (Error|null), response?: dhlmixer.DHLMixerError) => void;

        /**
         * Callback as used by {@link dhlmixer.DHLMixer#pollForKerfuMessage}.
         * @param error Error, if any
         * @param [response] KerfuMessageDep
         */
        type PollForKerfuMessageCallback = (error: (Error|null), response?: dhlmixer.KerfuMessageDep) => void;

        /**
         * Callback as used by {@link dhlmixer.DHLMixer#speech}.
         * @param error Error, if any
         * @param [response] SpeechResult
         */
        type SpeechCallback = (error: (Error|null), response?: dhlmixer.SpeechResult) => void;

        /**
         * Callback as used by {@link dhlmixer.DHLMixer#sendVerificationSms}.
         * @param error Error, if any
         * @param [response] KerfuError
         */
        type SendVerificationSmsCallback = (error: (Error|null), response?: dhlmixer.KerfuError) => void;

        /**
         * Callback as used by {@link dhlmixer.DHLMixer#loginWithVerificationCode}.
         * @param error Error, if any
         * @param [response] LoginResponse
         */
        type LoginWithVerificationCodeCallback = (error: (Error|null), response?: dhlmixer.LoginResponse) => void;

        /**
         * Callback as used by {@link dhlmixer.DHLMixer#queryWithVoice}.
         * @param error Error, if any
         * @param [response] SpeechResult
         */
        type QueryWithVoiceCallback = (error: (Error|null), response?: dhlmixer.SpeechResult) => void;

        /**
         * Callback as used by {@link dhlmixer.DHLMixer#queryWithKerfuMessage}.
         * @param error Error, if any
         * @param [response] KerfuResponse
         */
        type QueryWithKerfuMessageCallback = (error: (Error|null), response?: dhlmixer.KerfuResponse) => void;

        /**
         * Callback as used by {@link dhlmixer.DHLMixer#getKerfuMessages}.
         * @param error Error, if any
         * @param [response] KerfuMessageList
         */
        type GetKerfuMessagesCallback = (error: (Error|null), response?: dhlmixer.KerfuMessageList) => void;

        /**
         * Callback as used by {@link dhlmixer.DHLMixer#eventConnection}.
         * @param error Error, if any
         * @param [response] KerfuEvent
         */
        type EventConnectionCallback = (error: (Error|null), response?: dhlmixer.KerfuEvent) => void;

        /**
         * Callback as used by {@link dhlmixer.DHLMixer#sendKerfuResponseProactively}.
         * @param error Error, if any
         * @param [response] KerfuMessageAck
         */
        type SendKerfuResponseProactivelyCallback = (error: (Error|null), response?: dhlmixer.KerfuMessageAck) => void;

        /**
         * Callback as used by {@link dhlmixer.DHLMixer#getAccessToken}.
         * @param error Error, if any
         * @param [response] AccessToken
         */
        type GetAccessTokenCallback = (error: (Error|null), response?: dhlmixer.AccessToken) => void;
    }

    /** Properties of a SpeechData. */
    interface ISpeechData {

        /** SpeechData appId */
        appId?: (string|null);

        /** SpeechData eof */
        eof?: (number|null);

        /** SpeechData rawData */
        rawData?: (Uint8Array|null);

        /** SpeechData audioType */
        audioType?: (string|null);

        /** SpeechData userId */
        userId?: (string|null);

        /** SpeechData userInfo */
        userInfo?: (string|null);

        /** SpeechData platformType */
        platformType?: (string|null);

        /** SpeechData agentId */
        agentId?: (string|null);

        /** SpeechData agentName */
        agentName?: (string|null);

        /** SpeechData userName */
        userName?: (string|null);

        /** SpeechData data */
        data?: (string|null);

        /** SpeechData oneShot */
        oneShot?: (boolean|null);

        /** SpeechData requestData */
        requestData?: (dhlmixer.IDHLMixerRequestData|null);
    }

    /** Represents a SpeechData. */
    class SpeechData implements ISpeechData {

        /**
         * Constructs a new SpeechData.
         * @param [properties] Properties to set
         */
        constructor(properties?: dhlmixer.ISpeechData);

        /** SpeechData appId. */
        public appId: string;

        /** SpeechData eof. */
        public eof: number;

        /** SpeechData rawData. */
        public rawData: Uint8Array;

        /** SpeechData audioType. */
        public audioType: string;

        /** SpeechData userId. */
        public userId: string;

        /** SpeechData userInfo. */
        public userInfo: string;

        /** SpeechData platformType. */
        public platformType: string;

        /** SpeechData agentId. */
        public agentId: string;

        /** SpeechData agentName. */
        public agentName: string;

        /** SpeechData userName. */
        public userName: string;

        /** SpeechData data. */
        public data: string;

        /** SpeechData oneShot. */
        public oneShot: boolean;

        /** SpeechData requestData. */
        public requestData?: (dhlmixer.IDHLMixerRequestData|null);

        /**
         * Creates a new SpeechData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SpeechData instance
         */
        public static create(properties?: dhlmixer.ISpeechData): dhlmixer.SpeechData;

        /**
         * Encodes the specified SpeechData message. Does not implicitly {@link dhlmixer.SpeechData.verify|verify} messages.
         * @param message SpeechData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dhlmixer.ISpeechData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SpeechData message, length delimited. Does not implicitly {@link dhlmixer.SpeechData.verify|verify} messages.
         * @param message SpeechData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dhlmixer.ISpeechData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SpeechData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SpeechData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dhlmixer.SpeechData;

        /**
         * Decodes a SpeechData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SpeechData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dhlmixer.SpeechData;

        /**
         * Verifies a SpeechData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SpeechData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SpeechData
         */
        public static fromObject(object: { [k: string]: any }): dhlmixer.SpeechData;

        /**
         * Creates a plain object from a SpeechData message. Also converts values to other types if specified.
         * @param message SpeechData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dhlmixer.SpeechData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SpeechData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SpeechResult. */
    interface ISpeechResult {

        /** SpeechResult eof */
        eof?: (number|null);

        /** SpeechResult result */
        result?: (string|null);

        /** SpeechResult voiceUrl */
        voiceUrl?: (string|null);

        /** SpeechResult dhlError */
        dhlError?: (dhlmixer.IKerfuError|null);

        /** SpeechResult response */
        response?: (dhlmixer.IKerfuResponse|null);
    }

    /** Represents a SpeechResult. */
    class SpeechResult implements ISpeechResult {

        /**
         * Constructs a new SpeechResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: dhlmixer.ISpeechResult);

        /** SpeechResult eof. */
        public eof: number;

        /** SpeechResult result. */
        public result: string;

        /** SpeechResult voiceUrl. */
        public voiceUrl: string;

        /** SpeechResult dhlError. */
        public dhlError?: (dhlmixer.IKerfuError|null);

        /** SpeechResult response. */
        public response?: (dhlmixer.IKerfuResponse|null);

        /** SpeechResult dhlResponse. */
        public dhlResponse?: ("dhlError"|"response");

        /**
         * Creates a new SpeechResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SpeechResult instance
         */
        public static create(properties?: dhlmixer.ISpeechResult): dhlmixer.SpeechResult;

        /**
         * Encodes the specified SpeechResult message. Does not implicitly {@link dhlmixer.SpeechResult.verify|verify} messages.
         * @param message SpeechResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dhlmixer.ISpeechResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SpeechResult message, length delimited. Does not implicitly {@link dhlmixer.SpeechResult.verify|verify} messages.
         * @param message SpeechResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dhlmixer.ISpeechResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SpeechResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SpeechResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dhlmixer.SpeechResult;

        /**
         * Decodes a SpeechResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SpeechResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dhlmixer.SpeechResult;

        /**
         * Verifies a SpeechResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SpeechResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SpeechResult
         */
        public static fromObject(object: { [k: string]: any }): dhlmixer.SpeechResult;

        /**
         * Creates a plain object from a SpeechResult message. Also converts values to other types if specified.
         * @param message SpeechResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dhlmixer.SpeechResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SpeechResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DHLMixerRequest. */
    interface IDHLMixerRequest {

        /** DHLMixerRequest reqId */
        reqId?: (string|null);

        /** DHLMixerRequest appId */
        appId?: (string|null);

        /** DHLMixerRequest platformType */
        platformType?: (string|null);

        /** DHLMixerRequest query */
        query?: (string|null);

        /** DHLMixerRequest audioData */
        audioData?: (Uint8Array|null);

        /** DHLMixerRequest audioType */
        audioType?: (string|null);

        /** DHLMixerRequest agentId */
        agentId?: (string|null);

        /** DHLMixerRequest agentName */
        agentName?: (string|null);

        /** DHLMixerRequest userId */
        userId?: (string|null);

        /** DHLMixerRequest userName */
        userName?: (string|null);

        /** DHLMixerRequest userInfo */
        userInfo?: (string|null);

        /** DHLMixerRequest pushKey */
        pushKey?: (string|null);

        /** DHLMixerRequest extraData */
        extraData?: (Uint8Array|null);

        /** DHLMixerRequest queryId */
        queryId?: (string|null);

        /** DHLMixerRequest forceHandleManually */
        forceHandleManually?: (boolean|null);

        /** DHLMixerRequest dhlRequestType */
        dhlRequestType?: (dhl.DHLRequestType|null);
    }

    /** Represents a DHLMixerRequest. */
    class DHLMixerRequest implements IDHLMixerRequest {

        /**
         * Constructs a new DHLMixerRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: dhlmixer.IDHLMixerRequest);

        /** DHLMixerRequest reqId. */
        public reqId: string;

        /** DHLMixerRequest appId. */
        public appId: string;

        /** DHLMixerRequest platformType. */
        public platformType: string;

        /** DHLMixerRequest query. */
        public query: string;

        /** DHLMixerRequest audioData. */
        public audioData: Uint8Array;

        /** DHLMixerRequest audioType. */
        public audioType: string;

        /** DHLMixerRequest agentId. */
        public agentId: string;

        /** DHLMixerRequest agentName. */
        public agentName: string;

        /** DHLMixerRequest userId. */
        public userId: string;

        /** DHLMixerRequest userName. */
        public userName: string;

        /** DHLMixerRequest userInfo. */
        public userInfo: string;

        /** DHLMixerRequest pushKey. */
        public pushKey: string;

        /** DHLMixerRequest extraData. */
        public extraData: Uint8Array;

        /** DHLMixerRequest queryId. */
        public queryId: string;

        /** DHLMixerRequest forceHandleManually. */
        public forceHandleManually: boolean;

        /** DHLMixerRequest dhlRequestType. */
        public dhlRequestType: dhl.DHLRequestType;

        /**
         * Creates a new DHLMixerRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DHLMixerRequest instance
         */
        public static create(properties?: dhlmixer.IDHLMixerRequest): dhlmixer.DHLMixerRequest;

        /**
         * Encodes the specified DHLMixerRequest message. Does not implicitly {@link dhlmixer.DHLMixerRequest.verify|verify} messages.
         * @param message DHLMixerRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dhlmixer.IDHLMixerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DHLMixerRequest message, length delimited. Does not implicitly {@link dhlmixer.DHLMixerRequest.verify|verify} messages.
         * @param message DHLMixerRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dhlmixer.IDHLMixerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DHLMixerRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DHLMixerRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dhlmixer.DHLMixerRequest;

        /**
         * Decodes a DHLMixerRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DHLMixerRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dhlmixer.DHLMixerRequest;

        /**
         * Verifies a DHLMixerRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DHLMixerRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DHLMixerRequest
         */
        public static fromObject(object: { [k: string]: any }): dhlmixer.DHLMixerRequest;

        /**
         * Creates a plain object from a DHLMixerRequest message. Also converts values to other types if specified.
         * @param message DHLMixerRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dhlmixer.DHLMixerRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DHLMixerRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DHLMixerError. */
    interface IDHLMixerError {

        /** DHLMixerError errorCode */
        errorCode?: (number|null);

        /** DHLMixerError errorMessage */
        errorMessage?: (string|null);
    }

    /** Represents a DHLMixerError. */
    class DHLMixerError implements IDHLMixerError {

        /**
         * Constructs a new DHLMixerError.
         * @param [properties] Properties to set
         */
        constructor(properties?: dhlmixer.IDHLMixerError);

        /** DHLMixerError errorCode. */
        public errorCode: number;

        /** DHLMixerError errorMessage. */
        public errorMessage: string;

        /**
         * Creates a new DHLMixerError instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DHLMixerError instance
         */
        public static create(properties?: dhlmixer.IDHLMixerError): dhlmixer.DHLMixerError;

        /**
         * Encodes the specified DHLMixerError message. Does not implicitly {@link dhlmixer.DHLMixerError.verify|verify} messages.
         * @param message DHLMixerError message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dhlmixer.IDHLMixerError, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DHLMixerError message, length delimited. Does not implicitly {@link dhlmixer.DHLMixerError.verify|verify} messages.
         * @param message DHLMixerError message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dhlmixer.IDHLMixerError, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DHLMixerError message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DHLMixerError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dhlmixer.DHLMixerError;

        /**
         * Decodes a DHLMixerError message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DHLMixerError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dhlmixer.DHLMixerError;

        /**
         * Verifies a DHLMixerError message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DHLMixerError message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DHLMixerError
         */
        public static fromObject(object: { [k: string]: any }): dhlmixer.DHLMixerError;

        /**
         * Creates a plain object from a DHLMixerError message. Also converts values to other types if specified.
         * @param message DHLMixerError
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dhlmixer.DHLMixerError, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DHLMixerError to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a KerfuPollRequest. */
    interface IKerfuPollRequest {

        /** KerfuPollRequest appId */
        appId?: (string|null);

        /** KerfuPollRequest platformType */
        platformType?: (string|null);

        /** KerfuPollRequest userId */
        userId?: (string|null);
    }

    /** Represents a KerfuPollRequest. */
    class KerfuPollRequest implements IKerfuPollRequest {

        /**
         * Constructs a new KerfuPollRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: dhlmixer.IKerfuPollRequest);

        /** KerfuPollRequest appId. */
        public appId: string;

        /** KerfuPollRequest platformType. */
        public platformType: string;

        /** KerfuPollRequest userId. */
        public userId: string;

        /**
         * Creates a new KerfuPollRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns KerfuPollRequest instance
         */
        public static create(properties?: dhlmixer.IKerfuPollRequest): dhlmixer.KerfuPollRequest;

        /**
         * Encodes the specified KerfuPollRequest message. Does not implicitly {@link dhlmixer.KerfuPollRequest.verify|verify} messages.
         * @param message KerfuPollRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dhlmixer.IKerfuPollRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified KerfuPollRequest message, length delimited. Does not implicitly {@link dhlmixer.KerfuPollRequest.verify|verify} messages.
         * @param message KerfuPollRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dhlmixer.IKerfuPollRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a KerfuPollRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns KerfuPollRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dhlmixer.KerfuPollRequest;

        /**
         * Decodes a KerfuPollRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns KerfuPollRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dhlmixer.KerfuPollRequest;

        /**
         * Verifies a KerfuPollRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a KerfuPollRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns KerfuPollRequest
         */
        public static fromObject(object: { [k: string]: any }): dhlmixer.KerfuPollRequest;

        /**
         * Creates a plain object from a KerfuPollRequest message. Also converts values to other types if specified.
         * @param message KerfuPollRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dhlmixer.KerfuPollRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this KerfuPollRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DHLMixerResponse. */
    interface IDHLMixerResponse {

        /** DHLMixerResponse reqId */
        reqId?: (string|null);

        /** DHLMixerResponse appId */
        appId?: (string|null);

        /** DHLMixerResponse platformType */
        platformType?: (string|null);

        /** DHLMixerResponse agentId */
        agentId?: (string|null);

        /** DHLMixerResponse agentName */
        agentName?: (string|null);

        /** DHLMixerResponse userId */
        userId?: (string|null);

        /** DHLMixerResponse userName */
        userName?: (string|null);

        /** DHLMixerResponse userInfo */
        userInfo?: (string|null);

        /** DHLMixerResponse pushKey */
        pushKey?: (string|null);

        /** DHLMixerResponse result */
        result?: (string|null);

        /** DHLMixerResponse dhlScript */
        dhlScript?: (dhl.IDHLScript|null);
    }

    /** Represents a DHLMixerResponse. */
    class DHLMixerResponse implements IDHLMixerResponse {

        /**
         * Constructs a new DHLMixerResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: dhlmixer.IDHLMixerResponse);

        /** DHLMixerResponse reqId. */
        public reqId: string;

        /** DHLMixerResponse appId. */
        public appId: string;

        /** DHLMixerResponse platformType. */
        public platformType: string;

        /** DHLMixerResponse agentId. */
        public agentId: string;

        /** DHLMixerResponse agentName. */
        public agentName: string;

        /** DHLMixerResponse userId. */
        public userId: string;

        /** DHLMixerResponse userName. */
        public userName: string;

        /** DHLMixerResponse userInfo. */
        public userInfo: string;

        /** DHLMixerResponse pushKey. */
        public pushKey: string;

        /** DHLMixerResponse result. */
        public result: string;

        /** DHLMixerResponse dhlScript. */
        public dhlScript?: (dhl.IDHLScript|null);

        /**
         * Creates a new DHLMixerResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DHLMixerResponse instance
         */
        public static create(properties?: dhlmixer.IDHLMixerResponse): dhlmixer.DHLMixerResponse;

        /**
         * Encodes the specified DHLMixerResponse message. Does not implicitly {@link dhlmixer.DHLMixerResponse.verify|verify} messages.
         * @param message DHLMixerResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dhlmixer.IDHLMixerResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DHLMixerResponse message, length delimited. Does not implicitly {@link dhlmixer.DHLMixerResponse.verify|verify} messages.
         * @param message DHLMixerResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dhlmixer.IDHLMixerResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DHLMixerResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DHLMixerResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dhlmixer.DHLMixerResponse;

        /**
         * Decodes a DHLMixerResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DHLMixerResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dhlmixer.DHLMixerResponse;

        /**
         * Verifies a DHLMixerResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DHLMixerResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DHLMixerResponse
         */
        public static fromObject(object: { [k: string]: any }): dhlmixer.DHLMixerResponse;

        /**
         * Creates a plain object from a DHLMixerResponse message. Also converts values to other types if specified.
         * @param message DHLMixerResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dhlmixer.DHLMixerResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DHLMixerResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SendSMSRequest. */
    interface ISendSMSRequest {

        /** SendSMSRequest phoneNumber */
        phoneNumber?: (string|null);

        /** SendSMSRequest nationalCode */
        nationalCode?: (string|null);
    }

    /** Represents a SendSMSRequest. */
    class SendSMSRequest implements ISendSMSRequest {

        /**
         * Constructs a new SendSMSRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: dhlmixer.ISendSMSRequest);

        /** SendSMSRequest phoneNumber. */
        public phoneNumber: string;

        /** SendSMSRequest nationalCode. */
        public nationalCode: string;

        /**
         * Creates a new SendSMSRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendSMSRequest instance
         */
        public static create(properties?: dhlmixer.ISendSMSRequest): dhlmixer.SendSMSRequest;

        /**
         * Encodes the specified SendSMSRequest message. Does not implicitly {@link dhlmixer.SendSMSRequest.verify|verify} messages.
         * @param message SendSMSRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dhlmixer.ISendSMSRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendSMSRequest message, length delimited. Does not implicitly {@link dhlmixer.SendSMSRequest.verify|verify} messages.
         * @param message SendSMSRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dhlmixer.ISendSMSRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendSMSRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendSMSRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dhlmixer.SendSMSRequest;

        /**
         * Decodes a SendSMSRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendSMSRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dhlmixer.SendSMSRequest;

        /**
         * Verifies a SendSMSRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SendSMSRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SendSMSRequest
         */
        public static fromObject(object: { [k: string]: any }): dhlmixer.SendSMSRequest;

        /**
         * Creates a plain object from a SendSMSRequest message. Also converts values to other types if specified.
         * @param message SendSMSRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dhlmixer.SendSMSRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendSMSRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LoginRequest. */
    interface ILoginRequest {

        /** LoginRequest phoneNumber */
        phoneNumber?: (string|null);

        /** LoginRequest nationalCode */
        nationalCode?: (string|null);

        /** LoginRequest verificationCode */
        verificationCode?: (string|null);
    }

    /** Represents a LoginRequest. */
    class LoginRequest implements ILoginRequest {

        /**
         * Constructs a new LoginRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: dhlmixer.ILoginRequest);

        /** LoginRequest phoneNumber. */
        public phoneNumber: string;

        /** LoginRequest nationalCode. */
        public nationalCode: string;

        /** LoginRequest verificationCode. */
        public verificationCode: string;

        /**
         * Creates a new LoginRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginRequest instance
         */
        public static create(properties?: dhlmixer.ILoginRequest): dhlmixer.LoginRequest;

        /**
         * Encodes the specified LoginRequest message. Does not implicitly {@link dhlmixer.LoginRequest.verify|verify} messages.
         * @param message LoginRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dhlmixer.ILoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginRequest message, length delimited. Does not implicitly {@link dhlmixer.LoginRequest.verify|verify} messages.
         * @param message LoginRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dhlmixer.ILoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dhlmixer.LoginRequest;

        /**
         * Decodes a LoginRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dhlmixer.LoginRequest;

        /**
         * Verifies a LoginRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginRequest
         */
        public static fromObject(object: { [k: string]: any }): dhlmixer.LoginRequest;

        /**
         * Creates a plain object from a LoginRequest message. Also converts values to other types if specified.
         * @param message LoginRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dhlmixer.LoginRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LoginResponse. */
    interface ILoginResponse {

        /** LoginResponse errorCode */
        errorCode?: (number|null);

        /** LoginResponse errorMessage */
        errorMessage?: (string|null);

        /** LoginResponse userId */
        userId?: (string|null);
    }

    /** Represents a LoginResponse. */
    class LoginResponse implements ILoginResponse {

        /**
         * Constructs a new LoginResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: dhlmixer.ILoginResponse);

        /** LoginResponse errorCode. */
        public errorCode: number;

        /** LoginResponse errorMessage. */
        public errorMessage: string;

        /** LoginResponse userId. */
        public userId: string;

        /**
         * Creates a new LoginResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginResponse instance
         */
        public static create(properties?: dhlmixer.ILoginResponse): dhlmixer.LoginResponse;

        /**
         * Encodes the specified LoginResponse message. Does not implicitly {@link dhlmixer.LoginResponse.verify|verify} messages.
         * @param message LoginResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dhlmixer.ILoginResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginResponse message, length delimited. Does not implicitly {@link dhlmixer.LoginResponse.verify|verify} messages.
         * @param message LoginResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dhlmixer.ILoginResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dhlmixer.LoginResponse;

        /**
         * Decodes a LoginResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dhlmixer.LoginResponse;

        /**
         * Verifies a LoginResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginResponse
         */
        public static fromObject(object: { [k: string]: any }): dhlmixer.LoginResponse;

        /**
         * Creates a plain object from a LoginResponse message. Also converts values to other types if specified.
         * @param message LoginResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dhlmixer.LoginResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a KerfuMessageDep. */
    interface IKerfuMessageDep {

        /** KerfuMessageDep sessionId */
        sessionId?: (number|null);

        /** KerfuMessageDep appId */
        appId?: (string|null);

        /** KerfuMessageDep platformType */
        platformType?: (string|null);

        /** KerfuMessageDep agentId */
        agentId?: (string|null);

        /** KerfuMessageDep agentName */
        agentName?: (string|null);

        /** KerfuMessageDep userId */
        userId?: (string|null);

        /** KerfuMessageDep userName */
        userName?: (string|null);

        /** KerfuMessageDep userInfo */
        userInfo?: (string|null);

        /** KerfuMessageDep pushKey */
        pushKey?: (string|null);

        /** KerfuMessageDep message */
        message?: (string|null);

        /** KerfuMessageDep from */
        from?: (string|null);

        /** KerfuMessageDep customerServicePlatform */
        customerServicePlatform?: (string|null);

        /** KerfuMessageDep customerServiceSpecialistUid */
        customerServiceSpecialistUid?: (string|null);

        /** KerfuMessageDep messageType */
        messageType?: (string|null);

        /** KerfuMessageDep timestamp */
        timestamp?: (number|Long|null);

        /** KerfuMessageDep reqId */
        reqId?: (string|null);

        /** KerfuMessageDep dhlScript */
        dhlScript?: (dhl.IDHLScript|null);
    }

    /** Represents a KerfuMessageDep. */
    class KerfuMessageDep implements IKerfuMessageDep {

        /**
         * Constructs a new KerfuMessageDep.
         * @param [properties] Properties to set
         */
        constructor(properties?: dhlmixer.IKerfuMessageDep);

        /** KerfuMessageDep sessionId. */
        public sessionId: number;

        /** KerfuMessageDep appId. */
        public appId: string;

        /** KerfuMessageDep platformType. */
        public platformType: string;

        /** KerfuMessageDep agentId. */
        public agentId: string;

        /** KerfuMessageDep agentName. */
        public agentName: string;

        /** KerfuMessageDep userId. */
        public userId: string;

        /** KerfuMessageDep userName. */
        public userName: string;

        /** KerfuMessageDep userInfo. */
        public userInfo: string;

        /** KerfuMessageDep pushKey. */
        public pushKey: string;

        /** KerfuMessageDep message. */
        public message: string;

        /** KerfuMessageDep from. */
        public from: string;

        /** KerfuMessageDep customerServicePlatform. */
        public customerServicePlatform: string;

        /** KerfuMessageDep customerServiceSpecialistUid. */
        public customerServiceSpecialistUid: string;

        /** KerfuMessageDep messageType. */
        public messageType: string;

        /** KerfuMessageDep timestamp. */
        public timestamp: (number|Long);

        /** KerfuMessageDep reqId. */
        public reqId: string;

        /** KerfuMessageDep dhlScript. */
        public dhlScript?: (dhl.IDHLScript|null);

        /**
         * Creates a new KerfuMessageDep instance using the specified properties.
         * @param [properties] Properties to set
         * @returns KerfuMessageDep instance
         */
        public static create(properties?: dhlmixer.IKerfuMessageDep): dhlmixer.KerfuMessageDep;

        /**
         * Encodes the specified KerfuMessageDep message. Does not implicitly {@link dhlmixer.KerfuMessageDep.verify|verify} messages.
         * @param message KerfuMessageDep message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dhlmixer.IKerfuMessageDep, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified KerfuMessageDep message, length delimited. Does not implicitly {@link dhlmixer.KerfuMessageDep.verify|verify} messages.
         * @param message KerfuMessageDep message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dhlmixer.IKerfuMessageDep, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a KerfuMessageDep message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns KerfuMessageDep
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dhlmixer.KerfuMessageDep;

        /**
         * Decodes a KerfuMessageDep message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns KerfuMessageDep
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dhlmixer.KerfuMessageDep;

        /**
         * Verifies a KerfuMessageDep message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a KerfuMessageDep message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns KerfuMessageDep
         */
        public static fromObject(object: { [k: string]: any }): dhlmixer.KerfuMessageDep;

        /**
         * Creates a plain object from a KerfuMessageDep message. Also converts values to other types if specified.
         * @param message KerfuMessageDep
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dhlmixer.KerfuMessageDep, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this KerfuMessageDep to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** KerfuMessageType enum. */
    enum KerfuMessageType {
        Any = 0,
        Request = 1,
        Response = 2,
        PhantomResponse = 4
    }

    /** MessageContentType enum. */
    enum MessageContentType {
        Text = 0,
        Image = 1,
        Voice = 2,
        Video = 3,
        Script = 4
    }

    /** ResponseType enum. */
    enum ResponseType {
        Auto = 0,
        SemiAuto = 1,
        Manually = 2
    }

    /** Properties of a DHLMixerRequestData. */
    interface IDHLMixerRequestData {

        /** DHLMixerRequestData reqId */
        reqId?: (string|null);

        /** DHLMixerRequestData message */
        message?: (string|null);

        /** DHLMixerRequestData voiceUrl */
        voiceUrl?: (string|null);

        /** DHLMixerRequestData resourceUrl */
        resourceUrl?: (string|null);

        /** DHLMixerRequestData messageContentType */
        messageContentType?: (dhlmixer.MessageContentType|null);

        /** DHLMixerRequestData forceHandleManually */
        forceHandleManually?: (boolean|null);

        /** DHLMixerRequestData dhlRequestType */
        dhlRequestType?: (dhl.DHLRequestType|null);

        /** DHLMixerRequestData dynamicEntities */
        dynamicEntities?: (dhl.IDynamicEntity[]|null);

        /** DHLMixerRequestData globalAttributes */
        globalAttributes?: (dhl.IFilledAttribute[]|null);

        /** DHLMixerRequestData intentName */
        intentName?: (string|null);

        /** DHLMixerRequestData localAttributes */
        localAttributes?: (dhl.IFilledAttribute[]|null);
    }

    /** Represents a DHLMixerRequestData. */
    class DHLMixerRequestData implements IDHLMixerRequestData {

        /**
         * Constructs a new DHLMixerRequestData.
         * @param [properties] Properties to set
         */
        constructor(properties?: dhlmixer.IDHLMixerRequestData);

        /** DHLMixerRequestData reqId. */
        public reqId: string;

        /** DHLMixerRequestData message. */
        public message: string;

        /** DHLMixerRequestData voiceUrl. */
        public voiceUrl: string;

        /** DHLMixerRequestData resourceUrl. */
        public resourceUrl: string;

        /** DHLMixerRequestData messageContentType. */
        public messageContentType: dhlmixer.MessageContentType;

        /** DHLMixerRequestData forceHandleManually. */
        public forceHandleManually: boolean;

        /** DHLMixerRequestData dhlRequestType. */
        public dhlRequestType: dhl.DHLRequestType;

        /** DHLMixerRequestData dynamicEntities. */
        public dynamicEntities: dhl.IDynamicEntity[];

        /** DHLMixerRequestData globalAttributes. */
        public globalAttributes: dhl.IFilledAttribute[];

        /** DHLMixerRequestData intentName. */
        public intentName: string;

        /** DHLMixerRequestData localAttributes. */
        public localAttributes: dhl.IFilledAttribute[];

        /**
         * Creates a new DHLMixerRequestData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DHLMixerRequestData instance
         */
        public static create(properties?: dhlmixer.IDHLMixerRequestData): dhlmixer.DHLMixerRequestData;

        /**
         * Encodes the specified DHLMixerRequestData message. Does not implicitly {@link dhlmixer.DHLMixerRequestData.verify|verify} messages.
         * @param message DHLMixerRequestData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dhlmixer.IDHLMixerRequestData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DHLMixerRequestData message, length delimited. Does not implicitly {@link dhlmixer.DHLMixerRequestData.verify|verify} messages.
         * @param message DHLMixerRequestData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dhlmixer.IDHLMixerRequestData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DHLMixerRequestData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DHLMixerRequestData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dhlmixer.DHLMixerRequestData;

        /**
         * Decodes a DHLMixerRequestData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DHLMixerRequestData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dhlmixer.DHLMixerRequestData;

        /**
         * Verifies a DHLMixerRequestData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DHLMixerRequestData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DHLMixerRequestData
         */
        public static fromObject(object: { [k: string]: any }): dhlmixer.DHLMixerRequestData;

        /**
         * Creates a plain object from a DHLMixerRequestData message. Also converts values to other types if specified.
         * @param message DHLMixerRequestData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dhlmixer.DHLMixerRequestData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DHLMixerRequestData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DHLMixerResponseData. */
    interface IDHLMixerResponseData {

        /** DHLMixerResponseData reqId */
        reqId?: (string|null);

        /** DHLMixerResponseData message */
        message?: (string|null);

        /** DHLMixerResponseData resourceUrl */
        resourceUrl?: (string|null);

        /** DHLMixerResponseData messageContentType */
        messageContentType?: (dhlmixer.MessageContentType|null);

        /** DHLMixerResponseData responseType */
        responseType?: (dhlmixer.ResponseType|null);

        /** DHLMixerResponseData dhlScript */
        dhlScript?: (dhl.IDHLScript|null);

        /** DHLMixerResponseData supportPlatform */
        supportPlatform?: (string|null);

        /** DHLMixerResponseData supportApp */
        supportApp?: (string|null);

        /** DHLMixerResponseData supportUid */
        supportUid?: (string|null);
    }

    /** Represents a DHLMixerResponseData. */
    class DHLMixerResponseData implements IDHLMixerResponseData {

        /**
         * Constructs a new DHLMixerResponseData.
         * @param [properties] Properties to set
         */
        constructor(properties?: dhlmixer.IDHLMixerResponseData);

        /** DHLMixerResponseData reqId. */
        public reqId: string;

        /** DHLMixerResponseData message. */
        public message: string;

        /** DHLMixerResponseData resourceUrl. */
        public resourceUrl: string;

        /** DHLMixerResponseData messageContentType. */
        public messageContentType: dhlmixer.MessageContentType;

        /** DHLMixerResponseData responseType. */
        public responseType: dhlmixer.ResponseType;

        /** DHLMixerResponseData dhlScript. */
        public dhlScript?: (dhl.IDHLScript|null);

        /** DHLMixerResponseData supportPlatform. */
        public supportPlatform: string;

        /** DHLMixerResponseData supportApp. */
        public supportApp: string;

        /** DHLMixerResponseData supportUid. */
        public supportUid: string;

        /**
         * Creates a new DHLMixerResponseData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DHLMixerResponseData instance
         */
        public static create(properties?: dhlmixer.IDHLMixerResponseData): dhlmixer.DHLMixerResponseData;

        /**
         * Encodes the specified DHLMixerResponseData message. Does not implicitly {@link dhlmixer.DHLMixerResponseData.verify|verify} messages.
         * @param message DHLMixerResponseData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dhlmixer.IDHLMixerResponseData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DHLMixerResponseData message, length delimited. Does not implicitly {@link dhlmixer.DHLMixerResponseData.verify|verify} messages.
         * @param message DHLMixerResponseData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dhlmixer.IDHLMixerResponseData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DHLMixerResponseData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DHLMixerResponseData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dhlmixer.DHLMixerResponseData;

        /**
         * Decodes a DHLMixerResponseData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DHLMixerResponseData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dhlmixer.DHLMixerResponseData;

        /**
         * Verifies a DHLMixerResponseData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DHLMixerResponseData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DHLMixerResponseData
         */
        public static fromObject(object: { [k: string]: any }): dhlmixer.DHLMixerResponseData;

        /**
         * Creates a plain object from a DHLMixerResponseData message. Also converts values to other types if specified.
         * @param message DHLMixerResponseData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dhlmixer.DHLMixerResponseData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DHLMixerResponseData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a KerfuMessage. */
    interface IKerfuMessage {

        /** KerfuMessage messageId */
        messageId?: (number|Long|null);

        /** KerfuMessage sessionId */
        sessionId?: (number|null);

        /** KerfuMessage messageType */
        messageType?: (dhlmixer.KerfuMessageType|null);

        /** KerfuMessage platformType */
        platformType?: (string|null);

        /** KerfuMessage appId */
        appId?: (string|null);

        /** KerfuMessage userId */
        userId?: (string|null);

        /** KerfuMessage userName */
        userName?: (string|null);

        /** KerfuMessage agentId */
        agentId?: (string|null);

        /** KerfuMessage agentName */
        agentName?: (string|null);

        /** KerfuMessage timestamp */
        timestamp?: (number|Long|null);

        /** KerfuMessage request */
        request?: (dhlmixer.IDHLMixerRequestData|null);

        /** KerfuMessage response */
        response?: (dhlmixer.IDHLMixerResponseData|null);
    }

    /** Represents a KerfuMessage. */
    class KerfuMessage implements IKerfuMessage {

        /**
         * Constructs a new KerfuMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: dhlmixer.IKerfuMessage);

        /** KerfuMessage messageId. */
        public messageId: (number|Long);

        /** KerfuMessage sessionId. */
        public sessionId: number;

        /** KerfuMessage messageType. */
        public messageType: dhlmixer.KerfuMessageType;

        /** KerfuMessage platformType. */
        public platformType: string;

        /** KerfuMessage appId. */
        public appId: string;

        /** KerfuMessage userId. */
        public userId: string;

        /** KerfuMessage userName. */
        public userName: string;

        /** KerfuMessage agentId. */
        public agentId: string;

        /** KerfuMessage agentName. */
        public agentName: string;

        /** KerfuMessage timestamp. */
        public timestamp: (number|Long);

        /** KerfuMessage request. */
        public request?: (dhlmixer.IDHLMixerRequestData|null);

        /** KerfuMessage response. */
        public response?: (dhlmixer.IDHLMixerResponseData|null);

        /** KerfuMessage content. */
        public content?: ("request"|"response");

        /**
         * Creates a new KerfuMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns KerfuMessage instance
         */
        public static create(properties?: dhlmixer.IKerfuMessage): dhlmixer.KerfuMessage;

        /**
         * Encodes the specified KerfuMessage message. Does not implicitly {@link dhlmixer.KerfuMessage.verify|verify} messages.
         * @param message KerfuMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dhlmixer.IKerfuMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified KerfuMessage message, length delimited. Does not implicitly {@link dhlmixer.KerfuMessage.verify|verify} messages.
         * @param message KerfuMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dhlmixer.IKerfuMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a KerfuMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns KerfuMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dhlmixer.KerfuMessage;

        /**
         * Decodes a KerfuMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns KerfuMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dhlmixer.KerfuMessage;

        /**
         * Verifies a KerfuMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a KerfuMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns KerfuMessage
         */
        public static fromObject(object: { [k: string]: any }): dhlmixer.KerfuMessage;

        /**
         * Creates a plain object from a KerfuMessage message. Also converts values to other types if specified.
         * @param message KerfuMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dhlmixer.KerfuMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this KerfuMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a KerfuError. */
    interface IKerfuError {

        /** KerfuError errorCode */
        errorCode?: (number|null);

        /** KerfuError errorMessage */
        errorMessage?: (string|null);
    }

    /** Represents a KerfuError. */
    class KerfuError implements IKerfuError {

        /**
         * Constructs a new KerfuError.
         * @param [properties] Properties to set
         */
        constructor(properties?: dhlmixer.IKerfuError);

        /** KerfuError errorCode. */
        public errorCode: number;

        /** KerfuError errorMessage. */
        public errorMessage: string;

        /**
         * Creates a new KerfuError instance using the specified properties.
         * @param [properties] Properties to set
         * @returns KerfuError instance
         */
        public static create(properties?: dhlmixer.IKerfuError): dhlmixer.KerfuError;

        /**
         * Encodes the specified KerfuError message. Does not implicitly {@link dhlmixer.KerfuError.verify|verify} messages.
         * @param message KerfuError message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dhlmixer.IKerfuError, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified KerfuError message, length delimited. Does not implicitly {@link dhlmixer.KerfuError.verify|verify} messages.
         * @param message KerfuError message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dhlmixer.IKerfuError, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a KerfuError message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns KerfuError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dhlmixer.KerfuError;

        /**
         * Decodes a KerfuError message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns KerfuError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dhlmixer.KerfuError;

        /**
         * Verifies a KerfuError message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a KerfuError message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns KerfuError
         */
        public static fromObject(object: { [k: string]: any }): dhlmixer.KerfuError;

        /**
         * Creates a plain object from a KerfuError message. Also converts values to other types if specified.
         * @param message KerfuError
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dhlmixer.KerfuError, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this KerfuError to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a KerfuMessageAck. */
    interface IKerfuMessageAck {

        /** KerfuMessageAck sessionId */
        sessionId?: (number|null);

        /** KerfuMessageAck messageId */
        messageId?: (number|Long|null);

        /** KerfuMessageAck timestamp */
        timestamp?: (number|Long|null);
    }

    /** Represents a KerfuMessageAck. */
    class KerfuMessageAck implements IKerfuMessageAck {

        /**
         * Constructs a new KerfuMessageAck.
         * @param [properties] Properties to set
         */
        constructor(properties?: dhlmixer.IKerfuMessageAck);

        /** KerfuMessageAck sessionId. */
        public sessionId: number;

        /** KerfuMessageAck messageId. */
        public messageId: (number|Long);

        /** KerfuMessageAck timestamp. */
        public timestamp: (number|Long);

        /**
         * Creates a new KerfuMessageAck instance using the specified properties.
         * @param [properties] Properties to set
         * @returns KerfuMessageAck instance
         */
        public static create(properties?: dhlmixer.IKerfuMessageAck): dhlmixer.KerfuMessageAck;

        /**
         * Encodes the specified KerfuMessageAck message. Does not implicitly {@link dhlmixer.KerfuMessageAck.verify|verify} messages.
         * @param message KerfuMessageAck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dhlmixer.IKerfuMessageAck, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified KerfuMessageAck message, length delimited. Does not implicitly {@link dhlmixer.KerfuMessageAck.verify|verify} messages.
         * @param message KerfuMessageAck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dhlmixer.IKerfuMessageAck, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a KerfuMessageAck message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns KerfuMessageAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dhlmixer.KerfuMessageAck;

        /**
         * Decodes a KerfuMessageAck message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns KerfuMessageAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dhlmixer.KerfuMessageAck;

        /**
         * Verifies a KerfuMessageAck message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a KerfuMessageAck message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns KerfuMessageAck
         */
        public static fromObject(object: { [k: string]: any }): dhlmixer.KerfuMessageAck;

        /**
         * Creates a plain object from a KerfuMessageAck message. Also converts values to other types if specified.
         * @param message KerfuMessageAck
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dhlmixer.KerfuMessageAck, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this KerfuMessageAck to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a KerfuResponse. */
    interface IKerfuResponse {

        /** KerfuResponse ack */
        ack?: (dhlmixer.IKerfuMessageAck|null);

        /** KerfuResponse messages */
        messages?: (dhlmixer.IKerfuMessage[]|null);
    }

    /** Represents a KerfuResponse. */
    class KerfuResponse implements IKerfuResponse {

        /**
         * Constructs a new KerfuResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: dhlmixer.IKerfuResponse);

        /** KerfuResponse ack. */
        public ack?: (dhlmixer.IKerfuMessageAck|null);

        /** KerfuResponse messages. */
        public messages: dhlmixer.IKerfuMessage[];

        /**
         * Creates a new KerfuResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns KerfuResponse instance
         */
        public static create(properties?: dhlmixer.IKerfuResponse): dhlmixer.KerfuResponse;

        /**
         * Encodes the specified KerfuResponse message. Does not implicitly {@link dhlmixer.KerfuResponse.verify|verify} messages.
         * @param message KerfuResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dhlmixer.IKerfuResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified KerfuResponse message, length delimited. Does not implicitly {@link dhlmixer.KerfuResponse.verify|verify} messages.
         * @param message KerfuResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dhlmixer.IKerfuResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a KerfuResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns KerfuResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dhlmixer.KerfuResponse;

        /**
         * Decodes a KerfuResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns KerfuResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dhlmixer.KerfuResponse;

        /**
         * Verifies a KerfuResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a KerfuResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns KerfuResponse
         */
        public static fromObject(object: { [k: string]: any }): dhlmixer.KerfuResponse;

        /**
         * Creates a plain object from a KerfuResponse message. Also converts values to other types if specified.
         * @param message KerfuResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dhlmixer.KerfuResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this KerfuResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a KerfuMessageFilter. */
    interface IKerfuMessageFilter {

        /** KerfuMessageFilter sessionId */
        sessionId?: (number|null);

        /** KerfuMessageFilter messageId */
        messageId?: (number|Long|null);

        /** KerfuMessageFilter before */
        before?: (number|Long|null);

        /** KerfuMessageFilter after */
        after?: (number|Long|null);

        /** KerfuMessageFilter page */
        page?: (number|null);

        /** KerfuMessageFilter pageSize */
        pageSize?: (number|null);

        /** KerfuMessageFilter messageType */
        messageType?: (dhlmixer.KerfuMessageType|null);
    }

    /** Represents a KerfuMessageFilter. */
    class KerfuMessageFilter implements IKerfuMessageFilter {

        /**
         * Constructs a new KerfuMessageFilter.
         * @param [properties] Properties to set
         */
        constructor(properties?: dhlmixer.IKerfuMessageFilter);

        /** KerfuMessageFilter sessionId. */
        public sessionId: number;

        /** KerfuMessageFilter messageId. */
        public messageId: (number|Long);

        /** KerfuMessageFilter before. */
        public before: (number|Long);

        /** KerfuMessageFilter after. */
        public after: (number|Long);

        /** KerfuMessageFilter page. */
        public page: number;

        /** KerfuMessageFilter pageSize. */
        public pageSize: number;

        /** KerfuMessageFilter messageType. */
        public messageType: dhlmixer.KerfuMessageType;

        /**
         * Creates a new KerfuMessageFilter instance using the specified properties.
         * @param [properties] Properties to set
         * @returns KerfuMessageFilter instance
         */
        public static create(properties?: dhlmixer.IKerfuMessageFilter): dhlmixer.KerfuMessageFilter;

        /**
         * Encodes the specified KerfuMessageFilter message. Does not implicitly {@link dhlmixer.KerfuMessageFilter.verify|verify} messages.
         * @param message KerfuMessageFilter message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dhlmixer.IKerfuMessageFilter, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified KerfuMessageFilter message, length delimited. Does not implicitly {@link dhlmixer.KerfuMessageFilter.verify|verify} messages.
         * @param message KerfuMessageFilter message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dhlmixer.IKerfuMessageFilter, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a KerfuMessageFilter message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns KerfuMessageFilter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dhlmixer.KerfuMessageFilter;

        /**
         * Decodes a KerfuMessageFilter message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns KerfuMessageFilter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dhlmixer.KerfuMessageFilter;

        /**
         * Verifies a KerfuMessageFilter message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a KerfuMessageFilter message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns KerfuMessageFilter
         */
        public static fromObject(object: { [k: string]: any }): dhlmixer.KerfuMessageFilter;

        /**
         * Creates a plain object from a KerfuMessageFilter message. Also converts values to other types if specified.
         * @param message KerfuMessageFilter
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dhlmixer.KerfuMessageFilter, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this KerfuMessageFilter to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a KerfuMessageList. */
    interface IKerfuMessageList {

        /** KerfuMessageList messages */
        messages?: (dhlmixer.IKerfuMessage[]|null);
    }

    /** Represents a KerfuMessageList. */
    class KerfuMessageList implements IKerfuMessageList {

        /**
         * Constructs a new KerfuMessageList.
         * @param [properties] Properties to set
         */
        constructor(properties?: dhlmixer.IKerfuMessageList);

        /** KerfuMessageList messages. */
        public messages: dhlmixer.IKerfuMessage[];

        /**
         * Creates a new KerfuMessageList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns KerfuMessageList instance
         */
        public static create(properties?: dhlmixer.IKerfuMessageList): dhlmixer.KerfuMessageList;

        /**
         * Encodes the specified KerfuMessageList message. Does not implicitly {@link dhlmixer.KerfuMessageList.verify|verify} messages.
         * @param message KerfuMessageList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dhlmixer.IKerfuMessageList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified KerfuMessageList message, length delimited. Does not implicitly {@link dhlmixer.KerfuMessageList.verify|verify} messages.
         * @param message KerfuMessageList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dhlmixer.IKerfuMessageList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a KerfuMessageList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns KerfuMessageList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dhlmixer.KerfuMessageList;

        /**
         * Decodes a KerfuMessageList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns KerfuMessageList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dhlmixer.KerfuMessageList;

        /**
         * Verifies a KerfuMessageList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a KerfuMessageList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns KerfuMessageList
         */
        public static fromObject(object: { [k: string]: any }): dhlmixer.KerfuMessageList;

        /**
         * Creates a plain object from a KerfuMessageList message. Also converts values to other types if specified.
         * @param message KerfuMessageList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dhlmixer.KerfuMessageList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this KerfuMessageList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Action enum. */
    enum Action {
        Authentication = 0,
        EndConversation = 1
    }

    /** Event enum. */
    enum Event {
        ActionReply = 0,
        MessagePosted = 1
    }

    /** Properties of a KerfuAuthenticationData. */
    interface IKerfuAuthenticationData {

        /** KerfuAuthenticationData platformType */
        platformType?: (string|null);

        /** KerfuAuthenticationData appId */
        appId?: (string|null);

        /** KerfuAuthenticationData userId */
        userId?: (string|null);

        /** KerfuAuthenticationData isSupport */
        isSupport?: (boolean|null);
    }

    /** Represents a KerfuAuthenticationData. */
    class KerfuAuthenticationData implements IKerfuAuthenticationData {

        /**
         * Constructs a new KerfuAuthenticationData.
         * @param [properties] Properties to set
         */
        constructor(properties?: dhlmixer.IKerfuAuthenticationData);

        /** KerfuAuthenticationData platformType. */
        public platformType: string;

        /** KerfuAuthenticationData appId. */
        public appId: string;

        /** KerfuAuthenticationData userId. */
        public userId: string;

        /** KerfuAuthenticationData isSupport. */
        public isSupport: boolean;

        /**
         * Creates a new KerfuAuthenticationData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns KerfuAuthenticationData instance
         */
        public static create(properties?: dhlmixer.IKerfuAuthenticationData): dhlmixer.KerfuAuthenticationData;

        /**
         * Encodes the specified KerfuAuthenticationData message. Does not implicitly {@link dhlmixer.KerfuAuthenticationData.verify|verify} messages.
         * @param message KerfuAuthenticationData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dhlmixer.IKerfuAuthenticationData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified KerfuAuthenticationData message, length delimited. Does not implicitly {@link dhlmixer.KerfuAuthenticationData.verify|verify} messages.
         * @param message KerfuAuthenticationData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dhlmixer.IKerfuAuthenticationData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a KerfuAuthenticationData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns KerfuAuthenticationData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dhlmixer.KerfuAuthenticationData;

        /**
         * Decodes a KerfuAuthenticationData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns KerfuAuthenticationData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dhlmixer.KerfuAuthenticationData;

        /**
         * Verifies a KerfuAuthenticationData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a KerfuAuthenticationData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns KerfuAuthenticationData
         */
        public static fromObject(object: { [k: string]: any }): dhlmixer.KerfuAuthenticationData;

        /**
         * Creates a plain object from a KerfuAuthenticationData message. Also converts values to other types if specified.
         * @param message KerfuAuthenticationData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dhlmixer.KerfuAuthenticationData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this KerfuAuthenticationData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EndConversationData. */
    interface IEndConversationData {

        /** EndConversationData platformType */
        platformType?: (string|null);

        /** EndConversationData appId */
        appId?: (string|null);

        /** EndConversationData userId */
        userId?: (string|null);

        /** EndConversationData agentId */
        agentId?: (string|null);
    }

    /** Represents an EndConversationData. */
    class EndConversationData implements IEndConversationData {

        /**
         * Constructs a new EndConversationData.
         * @param [properties] Properties to set
         */
        constructor(properties?: dhlmixer.IEndConversationData);

        /** EndConversationData platformType. */
        public platformType: string;

        /** EndConversationData appId. */
        public appId: string;

        /** EndConversationData userId. */
        public userId: string;

        /** EndConversationData agentId. */
        public agentId: string;

        /**
         * Creates a new EndConversationData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EndConversationData instance
         */
        public static create(properties?: dhlmixer.IEndConversationData): dhlmixer.EndConversationData;

        /**
         * Encodes the specified EndConversationData message. Does not implicitly {@link dhlmixer.EndConversationData.verify|verify} messages.
         * @param message EndConversationData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dhlmixer.IEndConversationData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EndConversationData message, length delimited. Does not implicitly {@link dhlmixer.EndConversationData.verify|verify} messages.
         * @param message EndConversationData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dhlmixer.IEndConversationData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EndConversationData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EndConversationData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dhlmixer.EndConversationData;

        /**
         * Decodes an EndConversationData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EndConversationData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dhlmixer.EndConversationData;

        /**
         * Verifies an EndConversationData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EndConversationData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EndConversationData
         */
        public static fromObject(object: { [k: string]: any }): dhlmixer.EndConversationData;

        /**
         * Creates a plain object from an EndConversationData message. Also converts values to other types if specified.
         * @param message EndConversationData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dhlmixer.EndConversationData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EndConversationData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a KerfuAction. */
    interface IKerfuAction {

        /** KerfuAction seq */
        seq?: (string|null);

        /** KerfuAction action */
        action?: (dhlmixer.Action|null);

        /** KerfuAction authenticationData */
        authenticationData?: (dhlmixer.IKerfuAuthenticationData|null);

        /** KerfuAction endConversationData */
        endConversationData?: (dhlmixer.IEndConversationData|null);
    }

    /** Represents a KerfuAction. */
    class KerfuAction implements IKerfuAction {

        /**
         * Constructs a new KerfuAction.
         * @param [properties] Properties to set
         */
        constructor(properties?: dhlmixer.IKerfuAction);

        /** KerfuAction seq. */
        public seq: string;

        /** KerfuAction action. */
        public action: dhlmixer.Action;

        /** KerfuAction authenticationData. */
        public authenticationData?: (dhlmixer.IKerfuAuthenticationData|null);

        /** KerfuAction endConversationData. */
        public endConversationData?: (dhlmixer.IEndConversationData|null);

        /** KerfuAction data. */
        public data?: ("authenticationData"|"endConversationData");

        /**
         * Creates a new KerfuAction instance using the specified properties.
         * @param [properties] Properties to set
         * @returns KerfuAction instance
         */
        public static create(properties?: dhlmixer.IKerfuAction): dhlmixer.KerfuAction;

        /**
         * Encodes the specified KerfuAction message. Does not implicitly {@link dhlmixer.KerfuAction.verify|verify} messages.
         * @param message KerfuAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dhlmixer.IKerfuAction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified KerfuAction message, length delimited. Does not implicitly {@link dhlmixer.KerfuAction.verify|verify} messages.
         * @param message KerfuAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dhlmixer.IKerfuAction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a KerfuAction message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns KerfuAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dhlmixer.KerfuAction;

        /**
         * Decodes a KerfuAction message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns KerfuAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dhlmixer.KerfuAction;

        /**
         * Verifies a KerfuAction message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a KerfuAction message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns KerfuAction
         */
        public static fromObject(object: { [k: string]: any }): dhlmixer.KerfuAction;

        /**
         * Creates a plain object from a KerfuAction message. Also converts values to other types if specified.
         * @param message KerfuAction
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dhlmixer.KerfuAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this KerfuAction to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a KerfuReplyEventData. */
    interface IKerfuReplyEventData {

        /** KerfuReplyEventData seqReply */
        seqReply?: (string|null);

        /** KerfuReplyEventData status */
        status?: (string|null);
    }

    /** Represents a KerfuReplyEventData. */
    class KerfuReplyEventData implements IKerfuReplyEventData {

        /**
         * Constructs a new KerfuReplyEventData.
         * @param [properties] Properties to set
         */
        constructor(properties?: dhlmixer.IKerfuReplyEventData);

        /** KerfuReplyEventData seqReply. */
        public seqReply: string;

        /** KerfuReplyEventData status. */
        public status: string;

        /**
         * Creates a new KerfuReplyEventData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns KerfuReplyEventData instance
         */
        public static create(properties?: dhlmixer.IKerfuReplyEventData): dhlmixer.KerfuReplyEventData;

        /**
         * Encodes the specified KerfuReplyEventData message. Does not implicitly {@link dhlmixer.KerfuReplyEventData.verify|verify} messages.
         * @param message KerfuReplyEventData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dhlmixer.IKerfuReplyEventData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified KerfuReplyEventData message, length delimited. Does not implicitly {@link dhlmixer.KerfuReplyEventData.verify|verify} messages.
         * @param message KerfuReplyEventData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dhlmixer.IKerfuReplyEventData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a KerfuReplyEventData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns KerfuReplyEventData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dhlmixer.KerfuReplyEventData;

        /**
         * Decodes a KerfuReplyEventData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns KerfuReplyEventData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dhlmixer.KerfuReplyEventData;

        /**
         * Verifies a KerfuReplyEventData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a KerfuReplyEventData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns KerfuReplyEventData
         */
        public static fromObject(object: { [k: string]: any }): dhlmixer.KerfuReplyEventData;

        /**
         * Creates a plain object from a KerfuReplyEventData message. Also converts values to other types if specified.
         * @param message KerfuReplyEventData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dhlmixer.KerfuReplyEventData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this KerfuReplyEventData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a KerfuMessagePostedEventData. */
    interface IKerfuMessagePostedEventData {

        /** KerfuMessagePostedEventData sessionId */
        sessionId?: (number|null);

        /** KerfuMessagePostedEventData messageId */
        messageId?: (number|Long|null);

        /** KerfuMessagePostedEventData messageType */
        messageType?: (dhlmixer.KerfuMessageType|null);
    }

    /** Represents a KerfuMessagePostedEventData. */
    class KerfuMessagePostedEventData implements IKerfuMessagePostedEventData {

        /**
         * Constructs a new KerfuMessagePostedEventData.
         * @param [properties] Properties to set
         */
        constructor(properties?: dhlmixer.IKerfuMessagePostedEventData);

        /** KerfuMessagePostedEventData sessionId. */
        public sessionId: number;

        /** KerfuMessagePostedEventData messageId. */
        public messageId: (number|Long);

        /** KerfuMessagePostedEventData messageType. */
        public messageType: dhlmixer.KerfuMessageType;

        /**
         * Creates a new KerfuMessagePostedEventData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns KerfuMessagePostedEventData instance
         */
        public static create(properties?: dhlmixer.IKerfuMessagePostedEventData): dhlmixer.KerfuMessagePostedEventData;

        /**
         * Encodes the specified KerfuMessagePostedEventData message. Does not implicitly {@link dhlmixer.KerfuMessagePostedEventData.verify|verify} messages.
         * @param message KerfuMessagePostedEventData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dhlmixer.IKerfuMessagePostedEventData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified KerfuMessagePostedEventData message, length delimited. Does not implicitly {@link dhlmixer.KerfuMessagePostedEventData.verify|verify} messages.
         * @param message KerfuMessagePostedEventData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dhlmixer.IKerfuMessagePostedEventData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a KerfuMessagePostedEventData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns KerfuMessagePostedEventData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dhlmixer.KerfuMessagePostedEventData;

        /**
         * Decodes a KerfuMessagePostedEventData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns KerfuMessagePostedEventData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dhlmixer.KerfuMessagePostedEventData;

        /**
         * Verifies a KerfuMessagePostedEventData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a KerfuMessagePostedEventData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns KerfuMessagePostedEventData
         */
        public static fromObject(object: { [k: string]: any }): dhlmixer.KerfuMessagePostedEventData;

        /**
         * Creates a plain object from a KerfuMessagePostedEventData message. Also converts values to other types if specified.
         * @param message KerfuMessagePostedEventData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dhlmixer.KerfuMessagePostedEventData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this KerfuMessagePostedEventData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a KerfuEvent. */
    interface IKerfuEvent {

        /** KerfuEvent event */
        event?: (dhlmixer.Event|null);

        /** KerfuEvent replyEventData */
        replyEventData?: (dhlmixer.IKerfuReplyEventData|null);

        /** KerfuEvent messagePostedData */
        messagePostedData?: (dhlmixer.IKerfuMessagePostedEventData|null);
    }

    /** Represents a KerfuEvent. */
    class KerfuEvent implements IKerfuEvent {

        /**
         * Constructs a new KerfuEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: dhlmixer.IKerfuEvent);

        /** KerfuEvent event. */
        public event: dhlmixer.Event;

        /** KerfuEvent replyEventData. */
        public replyEventData?: (dhlmixer.IKerfuReplyEventData|null);

        /** KerfuEvent messagePostedData. */
        public messagePostedData?: (dhlmixer.IKerfuMessagePostedEventData|null);

        /** KerfuEvent data. */
        public data?: ("replyEventData"|"messagePostedData");

        /**
         * Creates a new KerfuEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns KerfuEvent instance
         */
        public static create(properties?: dhlmixer.IKerfuEvent): dhlmixer.KerfuEvent;

        /**
         * Encodes the specified KerfuEvent message. Does not implicitly {@link dhlmixer.KerfuEvent.verify|verify} messages.
         * @param message KerfuEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dhlmixer.IKerfuEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified KerfuEvent message, length delimited. Does not implicitly {@link dhlmixer.KerfuEvent.verify|verify} messages.
         * @param message KerfuEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dhlmixer.IKerfuEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a KerfuEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns KerfuEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dhlmixer.KerfuEvent;

        /**
         * Decodes a KerfuEvent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns KerfuEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dhlmixer.KerfuEvent;

        /**
         * Verifies a KerfuEvent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a KerfuEvent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns KerfuEvent
         */
        public static fromObject(object: { [k: string]: any }): dhlmixer.KerfuEvent;

        /**
         * Creates a plain object from a KerfuEvent message. Also converts values to other types if specified.
         * @param message KerfuEvent
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dhlmixer.KerfuEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this KerfuEvent to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AuthenticationParams. */
    interface IAuthenticationParams {

        /** AuthenticationParams appId */
        appId?: (string|null);

        /** AuthenticationParams appKey */
        appKey?: (string|null);

        /** AuthenticationParams appSecret */
        appSecret?: (string|null);
    }

    /** Represents an AuthenticationParams. */
    class AuthenticationParams implements IAuthenticationParams {

        /**
         * Constructs a new AuthenticationParams.
         * @param [properties] Properties to set
         */
        constructor(properties?: dhlmixer.IAuthenticationParams);

        /** AuthenticationParams appId. */
        public appId: string;

        /** AuthenticationParams appKey. */
        public appKey: string;

        /** AuthenticationParams appSecret. */
        public appSecret: string;

        /**
         * Creates a new AuthenticationParams instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AuthenticationParams instance
         */
        public static create(properties?: dhlmixer.IAuthenticationParams): dhlmixer.AuthenticationParams;

        /**
         * Encodes the specified AuthenticationParams message. Does not implicitly {@link dhlmixer.AuthenticationParams.verify|verify} messages.
         * @param message AuthenticationParams message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dhlmixer.IAuthenticationParams, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AuthenticationParams message, length delimited. Does not implicitly {@link dhlmixer.AuthenticationParams.verify|verify} messages.
         * @param message AuthenticationParams message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dhlmixer.IAuthenticationParams, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AuthenticationParams message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AuthenticationParams
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dhlmixer.AuthenticationParams;

        /**
         * Decodes an AuthenticationParams message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AuthenticationParams
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dhlmixer.AuthenticationParams;

        /**
         * Verifies an AuthenticationParams message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AuthenticationParams message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AuthenticationParams
         */
        public static fromObject(object: { [k: string]: any }): dhlmixer.AuthenticationParams;

        /**
         * Creates a plain object from an AuthenticationParams message. Also converts values to other types if specified.
         * @param message AuthenticationParams
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dhlmixer.AuthenticationParams, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AuthenticationParams to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AccessToken. */
    interface IAccessToken {

        /** AccessToken accessToken */
        accessToken?: (string|null);
    }

    /** Represents an AccessToken. */
    class AccessToken implements IAccessToken {

        /**
         * Constructs a new AccessToken.
         * @param [properties] Properties to set
         */
        constructor(properties?: dhlmixer.IAccessToken);

        /** AccessToken accessToken. */
        public accessToken: string;

        /**
         * Creates a new AccessToken instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AccessToken instance
         */
        public static create(properties?: dhlmixer.IAccessToken): dhlmixer.AccessToken;

        /**
         * Encodes the specified AccessToken message. Does not implicitly {@link dhlmixer.AccessToken.verify|verify} messages.
         * @param message AccessToken message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dhlmixer.IAccessToken, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AccessToken message, length delimited. Does not implicitly {@link dhlmixer.AccessToken.verify|verify} messages.
         * @param message AccessToken message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dhlmixer.IAccessToken, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AccessToken message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AccessToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dhlmixer.AccessToken;

        /**
         * Decodes an AccessToken message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AccessToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dhlmixer.AccessToken;

        /**
         * Verifies an AccessToken message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AccessToken message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AccessToken
         */
        public static fromObject(object: { [k: string]: any }): dhlmixer.AccessToken;

        /**
         * Creates a plain object from an AccessToken message. Also converts values to other types if specified.
         * @param message AccessToken
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dhlmixer.AccessToken, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AccessToken to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
