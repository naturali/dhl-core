/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.dhl = (function() {

    /**
     * Namespace dhl.
     * @exports dhl
     * @namespace
     */
    var dhl = {};

    /**
     * DHLRequestType enum.
     * @name dhl.DHLRequestType
     * @enum {string}
     * @property {number} Normal=0 Normal value
     * @property {number} AgentList=1 AgentList value
     * @property {number} WelcomeMessage=2 WelcomeMessage value
     */
    dhl.DHLRequestType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Normal"] = 0;
        values[valuesById[1] = "AgentList"] = 1;
        values[valuesById[2] = "WelcomeMessage"] = 2;
        return values;
    })();

    dhl.DHLAgentInfo = (function() {

        /**
         * Properties of a DHLAgentInfo.
         * @memberof dhl
         * @interface IDHLAgentInfo
         * @property {string|null} [id] DHLAgentInfo id
         * @property {string|null} [name] DHLAgentInfo name
         * @property {string|null} [org] DHLAgentInfo org
         * @property {string|null} [description] DHLAgentInfo description
         * @property {string|null} [iconUrl] DHLAgentInfo iconUrl
         * @property {string|null} [type] DHLAgentInfo type
         */

        /**
         * Constructs a new DHLAgentInfo.
         * @memberof dhl
         * @classdesc Represents a DHLAgentInfo.
         * @implements IDHLAgentInfo
         * @constructor
         * @param {dhl.IDHLAgentInfo=} [properties] Properties to set
         */
        function DHLAgentInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DHLAgentInfo id.
         * @member {string} id
         * @memberof dhl.DHLAgentInfo
         * @instance
         */
        DHLAgentInfo.prototype.id = "";

        /**
         * DHLAgentInfo name.
         * @member {string} name
         * @memberof dhl.DHLAgentInfo
         * @instance
         */
        DHLAgentInfo.prototype.name = "";

        /**
         * DHLAgentInfo org.
         * @member {string} org
         * @memberof dhl.DHLAgentInfo
         * @instance
         */
        DHLAgentInfo.prototype.org = "";

        /**
         * DHLAgentInfo description.
         * @member {string} description
         * @memberof dhl.DHLAgentInfo
         * @instance
         */
        DHLAgentInfo.prototype.description = "";

        /**
         * DHLAgentInfo iconUrl.
         * @member {string} iconUrl
         * @memberof dhl.DHLAgentInfo
         * @instance
         */
        DHLAgentInfo.prototype.iconUrl = "";

        /**
         * DHLAgentInfo type.
         * @member {string} type
         * @memberof dhl.DHLAgentInfo
         * @instance
         */
        DHLAgentInfo.prototype.type = "";

        /**
         * Creates a new DHLAgentInfo instance using the specified properties.
         * @function create
         * @memberof dhl.DHLAgentInfo
         * @static
         * @param {dhl.IDHLAgentInfo=} [properties] Properties to set
         * @returns {dhl.DHLAgentInfo} DHLAgentInfo instance
         */
        DHLAgentInfo.create = function create(properties) {
            return new DHLAgentInfo(properties);
        };

        /**
         * Encodes the specified DHLAgentInfo message. Does not implicitly {@link dhl.DHLAgentInfo.verify|verify} messages.
         * @function encode
         * @memberof dhl.DHLAgentInfo
         * @static
         * @param {dhl.IDHLAgentInfo} message DHLAgentInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DHLAgentInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.org != null && message.hasOwnProperty("org"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.org);
            if (message.description != null && message.hasOwnProperty("description"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.description);
            if (message.iconUrl != null && message.hasOwnProperty("iconUrl"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.iconUrl);
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.type);
            return writer;
        };

        /**
         * Encodes the specified DHLAgentInfo message, length delimited. Does not implicitly {@link dhl.DHLAgentInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dhl.DHLAgentInfo
         * @static
         * @param {dhl.IDHLAgentInfo} message DHLAgentInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DHLAgentInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DHLAgentInfo message from the specified reader or buffer.
         * @function decode
         * @memberof dhl.DHLAgentInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dhl.DHLAgentInfo} DHLAgentInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DHLAgentInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dhl.DHLAgentInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.org = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    message.iconUrl = reader.string();
                    break;
                case 6:
                    message.type = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DHLAgentInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dhl.DHLAgentInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dhl.DHLAgentInfo} DHLAgentInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DHLAgentInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DHLAgentInfo message.
         * @function verify
         * @memberof dhl.DHLAgentInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DHLAgentInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.org != null && message.hasOwnProperty("org"))
                if (!$util.isString(message.org))
                    return "org: string expected";
            if (message.description != null && message.hasOwnProperty("description"))
                if (!$util.isString(message.description))
                    return "description: string expected";
            if (message.iconUrl != null && message.hasOwnProperty("iconUrl"))
                if (!$util.isString(message.iconUrl))
                    return "iconUrl: string expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isString(message.type))
                    return "type: string expected";
            return null;
        };

        /**
         * Creates a DHLAgentInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dhl.DHLAgentInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dhl.DHLAgentInfo} DHLAgentInfo
         */
        DHLAgentInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.dhl.DHLAgentInfo)
                return object;
            var message = new $root.dhl.DHLAgentInfo();
            if (object.id != null)
                message.id = String(object.id);
            if (object.name != null)
                message.name = String(object.name);
            if (object.org != null)
                message.org = String(object.org);
            if (object.description != null)
                message.description = String(object.description);
            if (object.iconUrl != null)
                message.iconUrl = String(object.iconUrl);
            if (object.type != null)
                message.type = String(object.type);
            return message;
        };

        /**
         * Creates a plain object from a DHLAgentInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dhl.DHLAgentInfo
         * @static
         * @param {dhl.DHLAgentInfo} message DHLAgentInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DHLAgentInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                object.name = "";
                object.org = "";
                object.description = "";
                object.iconUrl = "";
                object.type = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.org != null && message.hasOwnProperty("org"))
                object.org = message.org;
            if (message.description != null && message.hasOwnProperty("description"))
                object.description = message.description;
            if (message.iconUrl != null && message.hasOwnProperty("iconUrl"))
                object.iconUrl = message.iconUrl;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            return object;
        };

        /**
         * Converts this DHLAgentInfo to JSON.
         * @function toJSON
         * @memberof dhl.DHLAgentInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DHLAgentInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DHLAgentInfo;
    })();

    dhl.DHLAgentResponse = (function() {

        /**
         * Properties of a DHLAgentResponse.
         * @memberof dhl
         * @interface IDHLAgentResponse
         * @property {Array.<dhl.IDHLAgentInfo>|null} [agentList] DHLAgentResponse agentList
         */

        /**
         * Constructs a new DHLAgentResponse.
         * @memberof dhl
         * @classdesc Represents a DHLAgentResponse.
         * @implements IDHLAgentResponse
         * @constructor
         * @param {dhl.IDHLAgentResponse=} [properties] Properties to set
         */
        function DHLAgentResponse(properties) {
            this.agentList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DHLAgentResponse agentList.
         * @member {Array.<dhl.IDHLAgentInfo>} agentList
         * @memberof dhl.DHLAgentResponse
         * @instance
         */
        DHLAgentResponse.prototype.agentList = $util.emptyArray;

        /**
         * Creates a new DHLAgentResponse instance using the specified properties.
         * @function create
         * @memberof dhl.DHLAgentResponse
         * @static
         * @param {dhl.IDHLAgentResponse=} [properties] Properties to set
         * @returns {dhl.DHLAgentResponse} DHLAgentResponse instance
         */
        DHLAgentResponse.create = function create(properties) {
            return new DHLAgentResponse(properties);
        };

        /**
         * Encodes the specified DHLAgentResponse message. Does not implicitly {@link dhl.DHLAgentResponse.verify|verify} messages.
         * @function encode
         * @memberof dhl.DHLAgentResponse
         * @static
         * @param {dhl.IDHLAgentResponse} message DHLAgentResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DHLAgentResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.agentList != null && message.agentList.length)
                for (var i = 0; i < message.agentList.length; ++i)
                    $root.dhl.DHLAgentInfo.encode(message.agentList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified DHLAgentResponse message, length delimited. Does not implicitly {@link dhl.DHLAgentResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dhl.DHLAgentResponse
         * @static
         * @param {dhl.IDHLAgentResponse} message DHLAgentResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DHLAgentResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DHLAgentResponse message from the specified reader or buffer.
         * @function decode
         * @memberof dhl.DHLAgentResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dhl.DHLAgentResponse} DHLAgentResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DHLAgentResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dhl.DHLAgentResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.agentList && message.agentList.length))
                        message.agentList = [];
                    message.agentList.push($root.dhl.DHLAgentInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DHLAgentResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dhl.DHLAgentResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dhl.DHLAgentResponse} DHLAgentResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DHLAgentResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DHLAgentResponse message.
         * @function verify
         * @memberof dhl.DHLAgentResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DHLAgentResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.agentList != null && message.hasOwnProperty("agentList")) {
                if (!Array.isArray(message.agentList))
                    return "agentList: array expected";
                for (var i = 0; i < message.agentList.length; ++i) {
                    var error = $root.dhl.DHLAgentInfo.verify(message.agentList[i]);
                    if (error)
                        return "agentList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a DHLAgentResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dhl.DHLAgentResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dhl.DHLAgentResponse} DHLAgentResponse
         */
        DHLAgentResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.dhl.DHLAgentResponse)
                return object;
            var message = new $root.dhl.DHLAgentResponse();
            if (object.agentList) {
                if (!Array.isArray(object.agentList))
                    throw TypeError(".dhl.DHLAgentResponse.agentList: array expected");
                message.agentList = [];
                for (var i = 0; i < object.agentList.length; ++i) {
                    if (typeof object.agentList[i] !== "object")
                        throw TypeError(".dhl.DHLAgentResponse.agentList: object expected");
                    message.agentList[i] = $root.dhl.DHLAgentInfo.fromObject(object.agentList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a DHLAgentResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dhl.DHLAgentResponse
         * @static
         * @param {dhl.DHLAgentResponse} message DHLAgentResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DHLAgentResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.agentList = [];
            if (message.agentList && message.agentList.length) {
                object.agentList = [];
                for (var j = 0; j < message.agentList.length; ++j)
                    object.agentList[j] = $root.dhl.DHLAgentInfo.toObject(message.agentList[j], options);
            }
            return object;
        };

        /**
         * Converts this DHLAgentResponse to JSON.
         * @function toJSON
         * @memberof dhl.DHLAgentResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DHLAgentResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DHLAgentResponse;
    })();

    dhl.DHLCardResponse = (function() {

        /**
         * Properties of a DHLCardResponse.
         * @memberof dhl
         * @interface IDHLCardResponse
         * @property {string|null} [title] DHLCardResponse title
         * @property {string|null} [description] DHLCardResponse description
         * @property {string|null} [imageUrl] DHLCardResponse imageUrl
         * @property {string|null} [deepLink] DHLCardResponse deepLink
         * @property {string|null} [script] DHLCardResponse script
         * @property {string|null} [preCardText] DHLCardResponse preCardText
         * @property {string|null} [postCardText] DHLCardResponse postCardText
         * @property {string|null} [coreference] DHLCardResponse coreference
         */

        /**
         * Constructs a new DHLCardResponse.
         * @memberof dhl
         * @classdesc Represents a DHLCardResponse.
         * @implements IDHLCardResponse
         * @constructor
         * @param {dhl.IDHLCardResponse=} [properties] Properties to set
         */
        function DHLCardResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DHLCardResponse title.
         * @member {string} title
         * @memberof dhl.DHLCardResponse
         * @instance
         */
        DHLCardResponse.prototype.title = "";

        /**
         * DHLCardResponse description.
         * @member {string} description
         * @memberof dhl.DHLCardResponse
         * @instance
         */
        DHLCardResponse.prototype.description = "";

        /**
         * DHLCardResponse imageUrl.
         * @member {string} imageUrl
         * @memberof dhl.DHLCardResponse
         * @instance
         */
        DHLCardResponse.prototype.imageUrl = "";

        /**
         * DHLCardResponse deepLink.
         * @member {string} deepLink
         * @memberof dhl.DHLCardResponse
         * @instance
         */
        DHLCardResponse.prototype.deepLink = "";

        /**
         * DHLCardResponse script.
         * @member {string} script
         * @memberof dhl.DHLCardResponse
         * @instance
         */
        DHLCardResponse.prototype.script = "";

        /**
         * DHLCardResponse preCardText.
         * @member {string} preCardText
         * @memberof dhl.DHLCardResponse
         * @instance
         */
        DHLCardResponse.prototype.preCardText = "";

        /**
         * DHLCardResponse postCardText.
         * @member {string} postCardText
         * @memberof dhl.DHLCardResponse
         * @instance
         */
        DHLCardResponse.prototype.postCardText = "";

        /**
         * DHLCardResponse coreference.
         * @member {string} coreference
         * @memberof dhl.DHLCardResponse
         * @instance
         */
        DHLCardResponse.prototype.coreference = "";

        /**
         * Creates a new DHLCardResponse instance using the specified properties.
         * @function create
         * @memberof dhl.DHLCardResponse
         * @static
         * @param {dhl.IDHLCardResponse=} [properties] Properties to set
         * @returns {dhl.DHLCardResponse} DHLCardResponse instance
         */
        DHLCardResponse.create = function create(properties) {
            return new DHLCardResponse(properties);
        };

        /**
         * Encodes the specified DHLCardResponse message. Does not implicitly {@link dhl.DHLCardResponse.verify|verify} messages.
         * @function encode
         * @memberof dhl.DHLCardResponse
         * @static
         * @param {dhl.IDHLCardResponse} message DHLCardResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DHLCardResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.title != null && message.hasOwnProperty("title"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.title);
            if (message.description != null && message.hasOwnProperty("description"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.description);
            if (message.imageUrl != null && message.hasOwnProperty("imageUrl"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.imageUrl);
            if (message.deepLink != null && message.hasOwnProperty("deepLink"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.deepLink);
            if (message.script != null && message.hasOwnProperty("script"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.script);
            if (message.preCardText != null && message.hasOwnProperty("preCardText"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.preCardText);
            if (message.postCardText != null && message.hasOwnProperty("postCardText"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.postCardText);
            if (message.coreference != null && message.hasOwnProperty("coreference"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.coreference);
            return writer;
        };

        /**
         * Encodes the specified DHLCardResponse message, length delimited. Does not implicitly {@link dhl.DHLCardResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dhl.DHLCardResponse
         * @static
         * @param {dhl.IDHLCardResponse} message DHLCardResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DHLCardResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DHLCardResponse message from the specified reader or buffer.
         * @function decode
         * @memberof dhl.DHLCardResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dhl.DHLCardResponse} DHLCardResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DHLCardResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dhl.DHLCardResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.imageUrl = reader.string();
                    break;
                case 4:
                    message.deepLink = reader.string();
                    break;
                case 5:
                    message.script = reader.string();
                    break;
                case 6:
                    message.preCardText = reader.string();
                    break;
                case 7:
                    message.postCardText = reader.string();
                    break;
                case 8:
                    message.coreference = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DHLCardResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dhl.DHLCardResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dhl.DHLCardResponse} DHLCardResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DHLCardResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DHLCardResponse message.
         * @function verify
         * @memberof dhl.DHLCardResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DHLCardResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.title != null && message.hasOwnProperty("title"))
                if (!$util.isString(message.title))
                    return "title: string expected";
            if (message.description != null && message.hasOwnProperty("description"))
                if (!$util.isString(message.description))
                    return "description: string expected";
            if (message.imageUrl != null && message.hasOwnProperty("imageUrl"))
                if (!$util.isString(message.imageUrl))
                    return "imageUrl: string expected";
            if (message.deepLink != null && message.hasOwnProperty("deepLink"))
                if (!$util.isString(message.deepLink))
                    return "deepLink: string expected";
            if (message.script != null && message.hasOwnProperty("script"))
                if (!$util.isString(message.script))
                    return "script: string expected";
            if (message.preCardText != null && message.hasOwnProperty("preCardText"))
                if (!$util.isString(message.preCardText))
                    return "preCardText: string expected";
            if (message.postCardText != null && message.hasOwnProperty("postCardText"))
                if (!$util.isString(message.postCardText))
                    return "postCardText: string expected";
            if (message.coreference != null && message.hasOwnProperty("coreference"))
                if (!$util.isString(message.coreference))
                    return "coreference: string expected";
            return null;
        };

        /**
         * Creates a DHLCardResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dhl.DHLCardResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dhl.DHLCardResponse} DHLCardResponse
         */
        DHLCardResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.dhl.DHLCardResponse)
                return object;
            var message = new $root.dhl.DHLCardResponse();
            if (object.title != null)
                message.title = String(object.title);
            if (object.description != null)
                message.description = String(object.description);
            if (object.imageUrl != null)
                message.imageUrl = String(object.imageUrl);
            if (object.deepLink != null)
                message.deepLink = String(object.deepLink);
            if (object.script != null)
                message.script = String(object.script);
            if (object.preCardText != null)
                message.preCardText = String(object.preCardText);
            if (object.postCardText != null)
                message.postCardText = String(object.postCardText);
            if (object.coreference != null)
                message.coreference = String(object.coreference);
            return message;
        };

        /**
         * Creates a plain object from a DHLCardResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dhl.DHLCardResponse
         * @static
         * @param {dhl.DHLCardResponse} message DHLCardResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DHLCardResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.title = "";
                object.description = "";
                object.imageUrl = "";
                object.deepLink = "";
                object.script = "";
                object.preCardText = "";
                object.postCardText = "";
                object.coreference = "";
            }
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = message.title;
            if (message.description != null && message.hasOwnProperty("description"))
                object.description = message.description;
            if (message.imageUrl != null && message.hasOwnProperty("imageUrl"))
                object.imageUrl = message.imageUrl;
            if (message.deepLink != null && message.hasOwnProperty("deepLink"))
                object.deepLink = message.deepLink;
            if (message.script != null && message.hasOwnProperty("script"))
                object.script = message.script;
            if (message.preCardText != null && message.hasOwnProperty("preCardText"))
                object.preCardText = message.preCardText;
            if (message.postCardText != null && message.hasOwnProperty("postCardText"))
                object.postCardText = message.postCardText;
            if (message.coreference != null && message.hasOwnProperty("coreference"))
                object.coreference = message.coreference;
            return object;
        };

        /**
         * Converts this DHLCardResponse to JSON.
         * @function toJSON
         * @memberof dhl.DHLCardResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DHLCardResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DHLCardResponse;
    })();

    dhl.Script = (function() {

        /**
         * Properties of a Script.
         * @memberof dhl
         * @interface IScript
         * @property {string|null} [textResponse] Script textResponse
         * @property {dhl.IDHLCardResponse|null} [cardResponse] Script cardResponse
         * @property {dhl.IDHLAgentResponse|null} [agentResponse] Script agentResponse
         */

        /**
         * Constructs a new Script.
         * @memberof dhl
         * @classdesc Represents a Script.
         * @implements IScript
         * @constructor
         * @param {dhl.IScript=} [properties] Properties to set
         */
        function Script(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Script textResponse.
         * @member {string} textResponse
         * @memberof dhl.Script
         * @instance
         */
        Script.prototype.textResponse = "";

        /**
         * Script cardResponse.
         * @member {dhl.IDHLCardResponse|null|undefined} cardResponse
         * @memberof dhl.Script
         * @instance
         */
        Script.prototype.cardResponse = null;

        /**
         * Script agentResponse.
         * @member {dhl.IDHLAgentResponse|null|undefined} agentResponse
         * @memberof dhl.Script
         * @instance
         */
        Script.prototype.agentResponse = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * Script scriptData.
         * @member {"textResponse"|"cardResponse"|"agentResponse"|undefined} scriptData
         * @memberof dhl.Script
         * @instance
         */
        Object.defineProperty(Script.prototype, "scriptData", {
            get: $util.oneOfGetter($oneOfFields = ["textResponse", "cardResponse", "agentResponse"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Script instance using the specified properties.
         * @function create
         * @memberof dhl.Script
         * @static
         * @param {dhl.IScript=} [properties] Properties to set
         * @returns {dhl.Script} Script instance
         */
        Script.create = function create(properties) {
            return new Script(properties);
        };

        /**
         * Encodes the specified Script message. Does not implicitly {@link dhl.Script.verify|verify} messages.
         * @function encode
         * @memberof dhl.Script
         * @static
         * @param {dhl.IScript} message Script message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Script.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.textResponse != null && message.hasOwnProperty("textResponse"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.textResponse);
            if (message.cardResponse != null && message.hasOwnProperty("cardResponse"))
                $root.dhl.DHLCardResponse.encode(message.cardResponse, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.agentResponse != null && message.hasOwnProperty("agentResponse"))
                $root.dhl.DHLAgentResponse.encode(message.agentResponse, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Script message, length delimited. Does not implicitly {@link dhl.Script.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dhl.Script
         * @static
         * @param {dhl.IScript} message Script message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Script.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Script message from the specified reader or buffer.
         * @function decode
         * @memberof dhl.Script
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dhl.Script} Script
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Script.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dhl.Script();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.textResponse = reader.string();
                    break;
                case 2:
                    message.cardResponse = $root.dhl.DHLCardResponse.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.agentResponse = $root.dhl.DHLAgentResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Script message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dhl.Script
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dhl.Script} Script
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Script.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Script message.
         * @function verify
         * @memberof dhl.Script
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Script.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.textResponse != null && message.hasOwnProperty("textResponse")) {
                properties.scriptData = 1;
                if (!$util.isString(message.textResponse))
                    return "textResponse: string expected";
            }
            if (message.cardResponse != null && message.hasOwnProperty("cardResponse")) {
                if (properties.scriptData === 1)
                    return "scriptData: multiple values";
                properties.scriptData = 1;
                {
                    var error = $root.dhl.DHLCardResponse.verify(message.cardResponse);
                    if (error)
                        return "cardResponse." + error;
                }
            }
            if (message.agentResponse != null && message.hasOwnProperty("agentResponse")) {
                if (properties.scriptData === 1)
                    return "scriptData: multiple values";
                properties.scriptData = 1;
                {
                    var error = $root.dhl.DHLAgentResponse.verify(message.agentResponse);
                    if (error)
                        return "agentResponse." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Script message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dhl.Script
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dhl.Script} Script
         */
        Script.fromObject = function fromObject(object) {
            if (object instanceof $root.dhl.Script)
                return object;
            var message = new $root.dhl.Script();
            if (object.textResponse != null)
                message.textResponse = String(object.textResponse);
            if (object.cardResponse != null) {
                if (typeof object.cardResponse !== "object")
                    throw TypeError(".dhl.Script.cardResponse: object expected");
                message.cardResponse = $root.dhl.DHLCardResponse.fromObject(object.cardResponse);
            }
            if (object.agentResponse != null) {
                if (typeof object.agentResponse !== "object")
                    throw TypeError(".dhl.Script.agentResponse: object expected");
                message.agentResponse = $root.dhl.DHLAgentResponse.fromObject(object.agentResponse);
            }
            return message;
        };

        /**
         * Creates a plain object from a Script message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dhl.Script
         * @static
         * @param {dhl.Script} message Script
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Script.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.textResponse != null && message.hasOwnProperty("textResponse")) {
                object.textResponse = message.textResponse;
                if (options.oneofs)
                    object.scriptData = "textResponse";
            }
            if (message.cardResponse != null && message.hasOwnProperty("cardResponse")) {
                object.cardResponse = $root.dhl.DHLCardResponse.toObject(message.cardResponse, options);
                if (options.oneofs)
                    object.scriptData = "cardResponse";
            }
            if (message.agentResponse != null && message.hasOwnProperty("agentResponse")) {
                object.agentResponse = $root.dhl.DHLAgentResponse.toObject(message.agentResponse, options);
                if (options.oneofs)
                    object.scriptData = "agentResponse";
            }
            return object;
        };

        /**
         * Converts this Script to JSON.
         * @function toJSON
         * @memberof dhl.Script
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Script.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Script;
    })();

    dhl.RepeatedCardResponse = (function() {

        /**
         * Properties of a RepeatedCardResponse.
         * @memberof dhl
         * @interface IRepeatedCardResponse
         * @property {string|null} [header] RepeatedCardResponse header
         * @property {Array.<dhl.IDHLCardResponse>|null} [cardMsgs] RepeatedCardResponse cardMsgs
         * @property {boolean|null} [useCoreference] RepeatedCardResponse useCoreference
         */

        /**
         * Constructs a new RepeatedCardResponse.
         * @memberof dhl
         * @classdesc Represents a RepeatedCardResponse.
         * @implements IRepeatedCardResponse
         * @constructor
         * @param {dhl.IRepeatedCardResponse=} [properties] Properties to set
         */
        function RepeatedCardResponse(properties) {
            this.cardMsgs = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RepeatedCardResponse header.
         * @member {string} header
         * @memberof dhl.RepeatedCardResponse
         * @instance
         */
        RepeatedCardResponse.prototype.header = "";

        /**
         * RepeatedCardResponse cardMsgs.
         * @member {Array.<dhl.IDHLCardResponse>} cardMsgs
         * @memberof dhl.RepeatedCardResponse
         * @instance
         */
        RepeatedCardResponse.prototype.cardMsgs = $util.emptyArray;

        /**
         * RepeatedCardResponse useCoreference.
         * @member {boolean} useCoreference
         * @memberof dhl.RepeatedCardResponse
         * @instance
         */
        RepeatedCardResponse.prototype.useCoreference = false;

        /**
         * Creates a new RepeatedCardResponse instance using the specified properties.
         * @function create
         * @memberof dhl.RepeatedCardResponse
         * @static
         * @param {dhl.IRepeatedCardResponse=} [properties] Properties to set
         * @returns {dhl.RepeatedCardResponse} RepeatedCardResponse instance
         */
        RepeatedCardResponse.create = function create(properties) {
            return new RepeatedCardResponse(properties);
        };

        /**
         * Encodes the specified RepeatedCardResponse message. Does not implicitly {@link dhl.RepeatedCardResponse.verify|verify} messages.
         * @function encode
         * @memberof dhl.RepeatedCardResponse
         * @static
         * @param {dhl.IRepeatedCardResponse} message RepeatedCardResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RepeatedCardResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.header != null && message.hasOwnProperty("header"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.header);
            if (message.cardMsgs != null && message.cardMsgs.length)
                for (var i = 0; i < message.cardMsgs.length; ++i)
                    $root.dhl.DHLCardResponse.encode(message.cardMsgs[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.useCoreference != null && message.hasOwnProperty("useCoreference"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.useCoreference);
            return writer;
        };

        /**
         * Encodes the specified RepeatedCardResponse message, length delimited. Does not implicitly {@link dhl.RepeatedCardResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dhl.RepeatedCardResponse
         * @static
         * @param {dhl.IRepeatedCardResponse} message RepeatedCardResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RepeatedCardResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RepeatedCardResponse message from the specified reader or buffer.
         * @function decode
         * @memberof dhl.RepeatedCardResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dhl.RepeatedCardResponse} RepeatedCardResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RepeatedCardResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dhl.RepeatedCardResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.header = reader.string();
                    break;
                case 2:
                    if (!(message.cardMsgs && message.cardMsgs.length))
                        message.cardMsgs = [];
                    message.cardMsgs.push($root.dhl.DHLCardResponse.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.useCoreference = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RepeatedCardResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dhl.RepeatedCardResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dhl.RepeatedCardResponse} RepeatedCardResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RepeatedCardResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RepeatedCardResponse message.
         * @function verify
         * @memberof dhl.RepeatedCardResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RepeatedCardResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.header != null && message.hasOwnProperty("header"))
                if (!$util.isString(message.header))
                    return "header: string expected";
            if (message.cardMsgs != null && message.hasOwnProperty("cardMsgs")) {
                if (!Array.isArray(message.cardMsgs))
                    return "cardMsgs: array expected";
                for (var i = 0; i < message.cardMsgs.length; ++i) {
                    var error = $root.dhl.DHLCardResponse.verify(message.cardMsgs[i]);
                    if (error)
                        return "cardMsgs." + error;
                }
            }
            if (message.useCoreference != null && message.hasOwnProperty("useCoreference"))
                if (typeof message.useCoreference !== "boolean")
                    return "useCoreference: boolean expected";
            return null;
        };

        /**
         * Creates a RepeatedCardResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dhl.RepeatedCardResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dhl.RepeatedCardResponse} RepeatedCardResponse
         */
        RepeatedCardResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.dhl.RepeatedCardResponse)
                return object;
            var message = new $root.dhl.RepeatedCardResponse();
            if (object.header != null)
                message.header = String(object.header);
            if (object.cardMsgs) {
                if (!Array.isArray(object.cardMsgs))
                    throw TypeError(".dhl.RepeatedCardResponse.cardMsgs: array expected");
                message.cardMsgs = [];
                for (var i = 0; i < object.cardMsgs.length; ++i) {
                    if (typeof object.cardMsgs[i] !== "object")
                        throw TypeError(".dhl.RepeatedCardResponse.cardMsgs: object expected");
                    message.cardMsgs[i] = $root.dhl.DHLCardResponse.fromObject(object.cardMsgs[i]);
                }
            }
            if (object.useCoreference != null)
                message.useCoreference = Boolean(object.useCoreference);
            return message;
        };

        /**
         * Creates a plain object from a RepeatedCardResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dhl.RepeatedCardResponse
         * @static
         * @param {dhl.RepeatedCardResponse} message RepeatedCardResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RepeatedCardResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.cardMsgs = [];
            if (options.defaults) {
                object.header = "";
                object.useCoreference = false;
            }
            if (message.header != null && message.hasOwnProperty("header"))
                object.header = message.header;
            if (message.cardMsgs && message.cardMsgs.length) {
                object.cardMsgs = [];
                for (var j = 0; j < message.cardMsgs.length; ++j)
                    object.cardMsgs[j] = $root.dhl.DHLCardResponse.toObject(message.cardMsgs[j], options);
            }
            if (message.useCoreference != null && message.hasOwnProperty("useCoreference"))
                object.useCoreference = message.useCoreference;
            return object;
        };

        /**
         * Converts this RepeatedCardResponse to JSON.
         * @function toJSON
         * @memberof dhl.RepeatedCardResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RepeatedCardResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RepeatedCardResponse;
    })();

    dhl.TextListItem = (function() {

        /**
         * Properties of a TextListItem.
         * @memberof dhl
         * @interface ITextListItem
         * @property {string|null} [content1] TextListItem content1
         * @property {string|null} [content2] TextListItem content2
         * @property {string|null} [content3] TextListItem content3
         * @property {string|null} [coreference] TextListItem coreference
         */

        /**
         * Constructs a new TextListItem.
         * @memberof dhl
         * @classdesc Represents a TextListItem.
         * @implements ITextListItem
         * @constructor
         * @param {dhl.ITextListItem=} [properties] Properties to set
         */
        function TextListItem(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TextListItem content1.
         * @member {string} content1
         * @memberof dhl.TextListItem
         * @instance
         */
        TextListItem.prototype.content1 = "";

        /**
         * TextListItem content2.
         * @member {string} content2
         * @memberof dhl.TextListItem
         * @instance
         */
        TextListItem.prototype.content2 = "";

        /**
         * TextListItem content3.
         * @member {string} content3
         * @memberof dhl.TextListItem
         * @instance
         */
        TextListItem.prototype.content3 = "";

        /**
         * TextListItem coreference.
         * @member {string} coreference
         * @memberof dhl.TextListItem
         * @instance
         */
        TextListItem.prototype.coreference = "";

        /**
         * Creates a new TextListItem instance using the specified properties.
         * @function create
         * @memberof dhl.TextListItem
         * @static
         * @param {dhl.ITextListItem=} [properties] Properties to set
         * @returns {dhl.TextListItem} TextListItem instance
         */
        TextListItem.create = function create(properties) {
            return new TextListItem(properties);
        };

        /**
         * Encodes the specified TextListItem message. Does not implicitly {@link dhl.TextListItem.verify|verify} messages.
         * @function encode
         * @memberof dhl.TextListItem
         * @static
         * @param {dhl.ITextListItem} message TextListItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TextListItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.content1 != null && message.hasOwnProperty("content1"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.content1);
            if (message.content2 != null && message.hasOwnProperty("content2"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.content2);
            if (message.content3 != null && message.hasOwnProperty("content3"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.content3);
            if (message.coreference != null && message.hasOwnProperty("coreference"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.coreference);
            return writer;
        };

        /**
         * Encodes the specified TextListItem message, length delimited. Does not implicitly {@link dhl.TextListItem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dhl.TextListItem
         * @static
         * @param {dhl.ITextListItem} message TextListItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TextListItem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TextListItem message from the specified reader or buffer.
         * @function decode
         * @memberof dhl.TextListItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dhl.TextListItem} TextListItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TextListItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dhl.TextListItem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.content1 = reader.string();
                    break;
                case 2:
                    message.content2 = reader.string();
                    break;
                case 3:
                    message.content3 = reader.string();
                    break;
                case 4:
                    message.coreference = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TextListItem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dhl.TextListItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dhl.TextListItem} TextListItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TextListItem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TextListItem message.
         * @function verify
         * @memberof dhl.TextListItem
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TextListItem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.content1 != null && message.hasOwnProperty("content1"))
                if (!$util.isString(message.content1))
                    return "content1: string expected";
            if (message.content2 != null && message.hasOwnProperty("content2"))
                if (!$util.isString(message.content2))
                    return "content2: string expected";
            if (message.content3 != null && message.hasOwnProperty("content3"))
                if (!$util.isString(message.content3))
                    return "content3: string expected";
            if (message.coreference != null && message.hasOwnProperty("coreference"))
                if (!$util.isString(message.coreference))
                    return "coreference: string expected";
            return null;
        };

        /**
         * Creates a TextListItem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dhl.TextListItem
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dhl.TextListItem} TextListItem
         */
        TextListItem.fromObject = function fromObject(object) {
            if (object instanceof $root.dhl.TextListItem)
                return object;
            var message = new $root.dhl.TextListItem();
            if (object.content1 != null)
                message.content1 = String(object.content1);
            if (object.content2 != null)
                message.content2 = String(object.content2);
            if (object.content3 != null)
                message.content3 = String(object.content3);
            if (object.coreference != null)
                message.coreference = String(object.coreference);
            return message;
        };

        /**
         * Creates a plain object from a TextListItem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dhl.TextListItem
         * @static
         * @param {dhl.TextListItem} message TextListItem
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TextListItem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.content1 = "";
                object.content2 = "";
                object.content3 = "";
                object.coreference = "";
            }
            if (message.content1 != null && message.hasOwnProperty("content1"))
                object.content1 = message.content1;
            if (message.content2 != null && message.hasOwnProperty("content2"))
                object.content2 = message.content2;
            if (message.content3 != null && message.hasOwnProperty("content3"))
                object.content3 = message.content3;
            if (message.coreference != null && message.hasOwnProperty("coreference"))
                object.coreference = message.coreference;
            return object;
        };

        /**
         * Converts this TextListItem to JSON.
         * @function toJSON
         * @memberof dhl.TextListItem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TextListItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TextListItem;
    })();

    dhl.RepeatedTextResponse = (function() {

        /**
         * Properties of a RepeatedTextResponse.
         * @memberof dhl
         * @interface IRepeatedTextResponse
         * @property {Array.<string>|null} [msg] RepeatedTextResponse msg
         * @property {string|null} [header] RepeatedTextResponse header
         * @property {Array.<dhl.ITextListItem>|null} [textList] RepeatedTextResponse textList
         * @property {boolean|null} [useCoreference] RepeatedTextResponse useCoreference
         */

        /**
         * Constructs a new RepeatedTextResponse.
         * @memberof dhl
         * @classdesc Represents a RepeatedTextResponse.
         * @implements IRepeatedTextResponse
         * @constructor
         * @param {dhl.IRepeatedTextResponse=} [properties] Properties to set
         */
        function RepeatedTextResponse(properties) {
            this.msg = [];
            this.textList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RepeatedTextResponse msg.
         * @member {Array.<string>} msg
         * @memberof dhl.RepeatedTextResponse
         * @instance
         */
        RepeatedTextResponse.prototype.msg = $util.emptyArray;

        /**
         * RepeatedTextResponse header.
         * @member {string} header
         * @memberof dhl.RepeatedTextResponse
         * @instance
         */
        RepeatedTextResponse.prototype.header = "";

        /**
         * RepeatedTextResponse textList.
         * @member {Array.<dhl.ITextListItem>} textList
         * @memberof dhl.RepeatedTextResponse
         * @instance
         */
        RepeatedTextResponse.prototype.textList = $util.emptyArray;

        /**
         * RepeatedTextResponse useCoreference.
         * @member {boolean} useCoreference
         * @memberof dhl.RepeatedTextResponse
         * @instance
         */
        RepeatedTextResponse.prototype.useCoreference = false;

        /**
         * Creates a new RepeatedTextResponse instance using the specified properties.
         * @function create
         * @memberof dhl.RepeatedTextResponse
         * @static
         * @param {dhl.IRepeatedTextResponse=} [properties] Properties to set
         * @returns {dhl.RepeatedTextResponse} RepeatedTextResponse instance
         */
        RepeatedTextResponse.create = function create(properties) {
            return new RepeatedTextResponse(properties);
        };

        /**
         * Encodes the specified RepeatedTextResponse message. Does not implicitly {@link dhl.RepeatedTextResponse.verify|verify} messages.
         * @function encode
         * @memberof dhl.RepeatedTextResponse
         * @static
         * @param {dhl.IRepeatedTextResponse} message RepeatedTextResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RepeatedTextResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.msg != null && message.msg.length)
                for (var i = 0; i < message.msg.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.msg[i]);
            if (message.header != null && message.hasOwnProperty("header"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.header);
            if (message.textList != null && message.textList.length)
                for (var i = 0; i < message.textList.length; ++i)
                    $root.dhl.TextListItem.encode(message.textList[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.useCoreference != null && message.hasOwnProperty("useCoreference"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.useCoreference);
            return writer;
        };

        /**
         * Encodes the specified RepeatedTextResponse message, length delimited. Does not implicitly {@link dhl.RepeatedTextResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dhl.RepeatedTextResponse
         * @static
         * @param {dhl.IRepeatedTextResponse} message RepeatedTextResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RepeatedTextResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RepeatedTextResponse message from the specified reader or buffer.
         * @function decode
         * @memberof dhl.RepeatedTextResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dhl.RepeatedTextResponse} RepeatedTextResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RepeatedTextResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dhl.RepeatedTextResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.msg && message.msg.length))
                        message.msg = [];
                    message.msg.push(reader.string());
                    break;
                case 2:
                    message.header = reader.string();
                    break;
                case 3:
                    if (!(message.textList && message.textList.length))
                        message.textList = [];
                    message.textList.push($root.dhl.TextListItem.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.useCoreference = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RepeatedTextResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dhl.RepeatedTextResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dhl.RepeatedTextResponse} RepeatedTextResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RepeatedTextResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RepeatedTextResponse message.
         * @function verify
         * @memberof dhl.RepeatedTextResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RepeatedTextResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.msg != null && message.hasOwnProperty("msg")) {
                if (!Array.isArray(message.msg))
                    return "msg: array expected";
                for (var i = 0; i < message.msg.length; ++i)
                    if (!$util.isString(message.msg[i]))
                        return "msg: string[] expected";
            }
            if (message.header != null && message.hasOwnProperty("header"))
                if (!$util.isString(message.header))
                    return "header: string expected";
            if (message.textList != null && message.hasOwnProperty("textList")) {
                if (!Array.isArray(message.textList))
                    return "textList: array expected";
                for (var i = 0; i < message.textList.length; ++i) {
                    var error = $root.dhl.TextListItem.verify(message.textList[i]);
                    if (error)
                        return "textList." + error;
                }
            }
            if (message.useCoreference != null && message.hasOwnProperty("useCoreference"))
                if (typeof message.useCoreference !== "boolean")
                    return "useCoreference: boolean expected";
            return null;
        };

        /**
         * Creates a RepeatedTextResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dhl.RepeatedTextResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dhl.RepeatedTextResponse} RepeatedTextResponse
         */
        RepeatedTextResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.dhl.RepeatedTextResponse)
                return object;
            var message = new $root.dhl.RepeatedTextResponse();
            if (object.msg) {
                if (!Array.isArray(object.msg))
                    throw TypeError(".dhl.RepeatedTextResponse.msg: array expected");
                message.msg = [];
                for (var i = 0; i < object.msg.length; ++i)
                    message.msg[i] = String(object.msg[i]);
            }
            if (object.header != null)
                message.header = String(object.header);
            if (object.textList) {
                if (!Array.isArray(object.textList))
                    throw TypeError(".dhl.RepeatedTextResponse.textList: array expected");
                message.textList = [];
                for (var i = 0; i < object.textList.length; ++i) {
                    if (typeof object.textList[i] !== "object")
                        throw TypeError(".dhl.RepeatedTextResponse.textList: object expected");
                    message.textList[i] = $root.dhl.TextListItem.fromObject(object.textList[i]);
                }
            }
            if (object.useCoreference != null)
                message.useCoreference = Boolean(object.useCoreference);
            return message;
        };

        /**
         * Creates a plain object from a RepeatedTextResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dhl.RepeatedTextResponse
         * @static
         * @param {dhl.RepeatedTextResponse} message RepeatedTextResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RepeatedTextResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.msg = [];
                object.textList = [];
            }
            if (options.defaults) {
                object.header = "";
                object.useCoreference = false;
            }
            if (message.msg && message.msg.length) {
                object.msg = [];
                for (var j = 0; j < message.msg.length; ++j)
                    object.msg[j] = message.msg[j];
            }
            if (message.header != null && message.hasOwnProperty("header"))
                object.header = message.header;
            if (message.textList && message.textList.length) {
                object.textList = [];
                for (var j = 0; j < message.textList.length; ++j)
                    object.textList[j] = $root.dhl.TextListItem.toObject(message.textList[j], options);
            }
            if (message.useCoreference != null && message.hasOwnProperty("useCoreference"))
                object.useCoreference = message.useCoreference;
            return object;
        };

        /**
         * Converts this RepeatedTextResponse to JSON.
         * @function toJSON
         * @memberof dhl.RepeatedTextResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RepeatedTextResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RepeatedTextResponse;
    })();

    dhl.ChatMessage = (function() {

        /**
         * Properties of a ChatMessage.
         * @memberof dhl
         * @interface IChatMessage
         * @property {string|null} [textMsg] ChatMessage textMsg
         * @property {dhl.IDHLCardResponse|null} [cardMsg] ChatMessage cardMsg
         * @property {string|null} [imageResponseUrl] ChatMessage imageResponseUrl
         * @property {dhl.IRepeatedTextResponse|null} [textListMsg] ChatMessage textListMsg
         * @property {dhl.IRepeatedCardResponse|null} [cardListMsg] ChatMessage cardListMsg
         */

        /**
         * Constructs a new ChatMessage.
         * @memberof dhl
         * @classdesc Represents a ChatMessage.
         * @implements IChatMessage
         * @constructor
         * @param {dhl.IChatMessage=} [properties] Properties to set
         */
        function ChatMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ChatMessage textMsg.
         * @member {string} textMsg
         * @memberof dhl.ChatMessage
         * @instance
         */
        ChatMessage.prototype.textMsg = "";

        /**
         * ChatMessage cardMsg.
         * @member {dhl.IDHLCardResponse|null|undefined} cardMsg
         * @memberof dhl.ChatMessage
         * @instance
         */
        ChatMessage.prototype.cardMsg = null;

        /**
         * ChatMessage imageResponseUrl.
         * @member {string} imageResponseUrl
         * @memberof dhl.ChatMessage
         * @instance
         */
        ChatMessage.prototype.imageResponseUrl = "";

        /**
         * ChatMessage textListMsg.
         * @member {dhl.IRepeatedTextResponse|null|undefined} textListMsg
         * @memberof dhl.ChatMessage
         * @instance
         */
        ChatMessage.prototype.textListMsg = null;

        /**
         * ChatMessage cardListMsg.
         * @member {dhl.IRepeatedCardResponse|null|undefined} cardListMsg
         * @memberof dhl.ChatMessage
         * @instance
         */
        ChatMessage.prototype.cardListMsg = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * ChatMessage chatMessage.
         * @member {"textMsg"|"cardMsg"|"imageResponseUrl"|"textListMsg"|"cardListMsg"|undefined} chatMessage
         * @memberof dhl.ChatMessage
         * @instance
         */
        Object.defineProperty(ChatMessage.prototype, "chatMessage", {
            get: $util.oneOfGetter($oneOfFields = ["textMsg", "cardMsg", "imageResponseUrl", "textListMsg", "cardListMsg"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new ChatMessage instance using the specified properties.
         * @function create
         * @memberof dhl.ChatMessage
         * @static
         * @param {dhl.IChatMessage=} [properties] Properties to set
         * @returns {dhl.ChatMessage} ChatMessage instance
         */
        ChatMessage.create = function create(properties) {
            return new ChatMessage(properties);
        };

        /**
         * Encodes the specified ChatMessage message. Does not implicitly {@link dhl.ChatMessage.verify|verify} messages.
         * @function encode
         * @memberof dhl.ChatMessage
         * @static
         * @param {dhl.IChatMessage} message ChatMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChatMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.textMsg != null && message.hasOwnProperty("textMsg"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.textMsg);
            if (message.cardMsg != null && message.hasOwnProperty("cardMsg"))
                $root.dhl.DHLCardResponse.encode(message.cardMsg, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.imageResponseUrl != null && message.hasOwnProperty("imageResponseUrl"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.imageResponseUrl);
            if (message.textListMsg != null && message.hasOwnProperty("textListMsg"))
                $root.dhl.RepeatedTextResponse.encode(message.textListMsg, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.cardListMsg != null && message.hasOwnProperty("cardListMsg"))
                $root.dhl.RepeatedCardResponse.encode(message.cardListMsg, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ChatMessage message, length delimited. Does not implicitly {@link dhl.ChatMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dhl.ChatMessage
         * @static
         * @param {dhl.IChatMessage} message ChatMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChatMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ChatMessage message from the specified reader or buffer.
         * @function decode
         * @memberof dhl.ChatMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dhl.ChatMessage} ChatMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChatMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dhl.ChatMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.textMsg = reader.string();
                    break;
                case 2:
                    message.cardMsg = $root.dhl.DHLCardResponse.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.imageResponseUrl = reader.string();
                    break;
                case 4:
                    message.textListMsg = $root.dhl.RepeatedTextResponse.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.cardListMsg = $root.dhl.RepeatedCardResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ChatMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dhl.ChatMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dhl.ChatMessage} ChatMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChatMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ChatMessage message.
         * @function verify
         * @memberof dhl.ChatMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ChatMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.textMsg != null && message.hasOwnProperty("textMsg")) {
                properties.chatMessage = 1;
                if (!$util.isString(message.textMsg))
                    return "textMsg: string expected";
            }
            if (message.cardMsg != null && message.hasOwnProperty("cardMsg")) {
                if (properties.chatMessage === 1)
                    return "chatMessage: multiple values";
                properties.chatMessage = 1;
                {
                    var error = $root.dhl.DHLCardResponse.verify(message.cardMsg);
                    if (error)
                        return "cardMsg." + error;
                }
            }
            if (message.imageResponseUrl != null && message.hasOwnProperty("imageResponseUrl")) {
                if (properties.chatMessage === 1)
                    return "chatMessage: multiple values";
                properties.chatMessage = 1;
                if (!$util.isString(message.imageResponseUrl))
                    return "imageResponseUrl: string expected";
            }
            if (message.textListMsg != null && message.hasOwnProperty("textListMsg")) {
                if (properties.chatMessage === 1)
                    return "chatMessage: multiple values";
                properties.chatMessage = 1;
                {
                    var error = $root.dhl.RepeatedTextResponse.verify(message.textListMsg);
                    if (error)
                        return "textListMsg." + error;
                }
            }
            if (message.cardListMsg != null && message.hasOwnProperty("cardListMsg")) {
                if (properties.chatMessage === 1)
                    return "chatMessage: multiple values";
                properties.chatMessage = 1;
                {
                    var error = $root.dhl.RepeatedCardResponse.verify(message.cardListMsg);
                    if (error)
                        return "cardListMsg." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ChatMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dhl.ChatMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dhl.ChatMessage} ChatMessage
         */
        ChatMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.dhl.ChatMessage)
                return object;
            var message = new $root.dhl.ChatMessage();
            if (object.textMsg != null)
                message.textMsg = String(object.textMsg);
            if (object.cardMsg != null) {
                if (typeof object.cardMsg !== "object")
                    throw TypeError(".dhl.ChatMessage.cardMsg: object expected");
                message.cardMsg = $root.dhl.DHLCardResponse.fromObject(object.cardMsg);
            }
            if (object.imageResponseUrl != null)
                message.imageResponseUrl = String(object.imageResponseUrl);
            if (object.textListMsg != null) {
                if (typeof object.textListMsg !== "object")
                    throw TypeError(".dhl.ChatMessage.textListMsg: object expected");
                message.textListMsg = $root.dhl.RepeatedTextResponse.fromObject(object.textListMsg);
            }
            if (object.cardListMsg != null) {
                if (typeof object.cardListMsg !== "object")
                    throw TypeError(".dhl.ChatMessage.cardListMsg: object expected");
                message.cardListMsg = $root.dhl.RepeatedCardResponse.fromObject(object.cardListMsg);
            }
            return message;
        };

        /**
         * Creates a plain object from a ChatMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dhl.ChatMessage
         * @static
         * @param {dhl.ChatMessage} message ChatMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChatMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.textMsg != null && message.hasOwnProperty("textMsg")) {
                object.textMsg = message.textMsg;
                if (options.oneofs)
                    object.chatMessage = "textMsg";
            }
            if (message.cardMsg != null && message.hasOwnProperty("cardMsg")) {
                object.cardMsg = $root.dhl.DHLCardResponse.toObject(message.cardMsg, options);
                if (options.oneofs)
                    object.chatMessage = "cardMsg";
            }
            if (message.imageResponseUrl != null && message.hasOwnProperty("imageResponseUrl")) {
                object.imageResponseUrl = message.imageResponseUrl;
                if (options.oneofs)
                    object.chatMessage = "imageResponseUrl";
            }
            if (message.textListMsg != null && message.hasOwnProperty("textListMsg")) {
                object.textListMsg = $root.dhl.RepeatedTextResponse.toObject(message.textListMsg, options);
                if (options.oneofs)
                    object.chatMessage = "textListMsg";
            }
            if (message.cardListMsg != null && message.hasOwnProperty("cardListMsg")) {
                object.cardListMsg = $root.dhl.RepeatedCardResponse.toObject(message.cardListMsg, options);
                if (options.oneofs)
                    object.chatMessage = "cardListMsg";
            }
            return object;
        };

        /**
         * Converts this ChatMessage to JSON.
         * @function toJSON
         * @memberof dhl.ChatMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChatMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ChatMessage;
    })();

    dhl.DHLChatResponse = (function() {

        /**
         * Properties of a DHLChatResponse.
         * @memberof dhl
         * @interface IDHLChatResponse
         * @property {Array.<dhl.IChatMessage>|null} [msgs] DHLChatResponse msgs
         * @property {Array.<string>|null} [candidates] DHLChatResponse candidates
         */

        /**
         * Constructs a new DHLChatResponse.
         * @memberof dhl
         * @classdesc Represents a DHLChatResponse.
         * @implements IDHLChatResponse
         * @constructor
         * @param {dhl.IDHLChatResponse=} [properties] Properties to set
         */
        function DHLChatResponse(properties) {
            this.msgs = [];
            this.candidates = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DHLChatResponse msgs.
         * @member {Array.<dhl.IChatMessage>} msgs
         * @memberof dhl.DHLChatResponse
         * @instance
         */
        DHLChatResponse.prototype.msgs = $util.emptyArray;

        /**
         * DHLChatResponse candidates.
         * @member {Array.<string>} candidates
         * @memberof dhl.DHLChatResponse
         * @instance
         */
        DHLChatResponse.prototype.candidates = $util.emptyArray;

        /**
         * Creates a new DHLChatResponse instance using the specified properties.
         * @function create
         * @memberof dhl.DHLChatResponse
         * @static
         * @param {dhl.IDHLChatResponse=} [properties] Properties to set
         * @returns {dhl.DHLChatResponse} DHLChatResponse instance
         */
        DHLChatResponse.create = function create(properties) {
            return new DHLChatResponse(properties);
        };

        /**
         * Encodes the specified DHLChatResponse message. Does not implicitly {@link dhl.DHLChatResponse.verify|verify} messages.
         * @function encode
         * @memberof dhl.DHLChatResponse
         * @static
         * @param {dhl.IDHLChatResponse} message DHLChatResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DHLChatResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.msgs != null && message.msgs.length)
                for (var i = 0; i < message.msgs.length; ++i)
                    $root.dhl.ChatMessage.encode(message.msgs[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.candidates != null && message.candidates.length)
                for (var i = 0; i < message.candidates.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.candidates[i]);
            return writer;
        };

        /**
         * Encodes the specified DHLChatResponse message, length delimited. Does not implicitly {@link dhl.DHLChatResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dhl.DHLChatResponse
         * @static
         * @param {dhl.IDHLChatResponse} message DHLChatResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DHLChatResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DHLChatResponse message from the specified reader or buffer.
         * @function decode
         * @memberof dhl.DHLChatResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dhl.DHLChatResponse} DHLChatResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DHLChatResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dhl.DHLChatResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.msgs && message.msgs.length))
                        message.msgs = [];
                    message.msgs.push($root.dhl.ChatMessage.decode(reader, reader.uint32()));
                    break;
                case 2:
                    if (!(message.candidates && message.candidates.length))
                        message.candidates = [];
                    message.candidates.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DHLChatResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dhl.DHLChatResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dhl.DHLChatResponse} DHLChatResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DHLChatResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DHLChatResponse message.
         * @function verify
         * @memberof dhl.DHLChatResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DHLChatResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.msgs != null && message.hasOwnProperty("msgs")) {
                if (!Array.isArray(message.msgs))
                    return "msgs: array expected";
                for (var i = 0; i < message.msgs.length; ++i) {
                    var error = $root.dhl.ChatMessage.verify(message.msgs[i]);
                    if (error)
                        return "msgs." + error;
                }
            }
            if (message.candidates != null && message.hasOwnProperty("candidates")) {
                if (!Array.isArray(message.candidates))
                    return "candidates: array expected";
                for (var i = 0; i < message.candidates.length; ++i)
                    if (!$util.isString(message.candidates[i]))
                        return "candidates: string[] expected";
            }
            return null;
        };

        /**
         * Creates a DHLChatResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dhl.DHLChatResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dhl.DHLChatResponse} DHLChatResponse
         */
        DHLChatResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.dhl.DHLChatResponse)
                return object;
            var message = new $root.dhl.DHLChatResponse();
            if (object.msgs) {
                if (!Array.isArray(object.msgs))
                    throw TypeError(".dhl.DHLChatResponse.msgs: array expected");
                message.msgs = [];
                for (var i = 0; i < object.msgs.length; ++i) {
                    if (typeof object.msgs[i] !== "object")
                        throw TypeError(".dhl.DHLChatResponse.msgs: object expected");
                    message.msgs[i] = $root.dhl.ChatMessage.fromObject(object.msgs[i]);
                }
            }
            if (object.candidates) {
                if (!Array.isArray(object.candidates))
                    throw TypeError(".dhl.DHLChatResponse.candidates: array expected");
                message.candidates = [];
                for (var i = 0; i < object.candidates.length; ++i)
                    message.candidates[i] = String(object.candidates[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a DHLChatResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dhl.DHLChatResponse
         * @static
         * @param {dhl.DHLChatResponse} message DHLChatResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DHLChatResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.msgs = [];
                object.candidates = [];
            }
            if (message.msgs && message.msgs.length) {
                object.msgs = [];
                for (var j = 0; j < message.msgs.length; ++j)
                    object.msgs[j] = $root.dhl.ChatMessage.toObject(message.msgs[j], options);
            }
            if (message.candidates && message.candidates.length) {
                object.candidates = [];
                for (var j = 0; j < message.candidates.length; ++j)
                    object.candidates[j] = message.candidates[j];
            }
            return object;
        };

        /**
         * Converts this DHLChatResponse to JSON.
         * @function toJSON
         * @memberof dhl.DHLChatResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DHLChatResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DHLChatResponse;
    })();

    dhl.SuggestedValues = (function() {

        /**
         * Properties of a SuggestedValues.
         * @memberof dhl
         * @interface ISuggestedValues
         * @property {string|null} [text] SuggestedValues text
         */

        /**
         * Constructs a new SuggestedValues.
         * @memberof dhl
         * @classdesc Represents a SuggestedValues.
         * @implements ISuggestedValues
         * @constructor
         * @param {dhl.ISuggestedValues=} [properties] Properties to set
         */
        function SuggestedValues(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SuggestedValues text.
         * @member {string} text
         * @memberof dhl.SuggestedValues
         * @instance
         */
        SuggestedValues.prototype.text = "";

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * SuggestedValues value.
         * @member {"text"|undefined} value
         * @memberof dhl.SuggestedValues
         * @instance
         */
        Object.defineProperty(SuggestedValues.prototype, "value", {
            get: $util.oneOfGetter($oneOfFields = ["text"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new SuggestedValues instance using the specified properties.
         * @function create
         * @memberof dhl.SuggestedValues
         * @static
         * @param {dhl.ISuggestedValues=} [properties] Properties to set
         * @returns {dhl.SuggestedValues} SuggestedValues instance
         */
        SuggestedValues.create = function create(properties) {
            return new SuggestedValues(properties);
        };

        /**
         * Encodes the specified SuggestedValues message. Does not implicitly {@link dhl.SuggestedValues.verify|verify} messages.
         * @function encode
         * @memberof dhl.SuggestedValues
         * @static
         * @param {dhl.ISuggestedValues} message SuggestedValues message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuggestedValues.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.text != null && message.hasOwnProperty("text"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.text);
            return writer;
        };

        /**
         * Encodes the specified SuggestedValues message, length delimited. Does not implicitly {@link dhl.SuggestedValues.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dhl.SuggestedValues
         * @static
         * @param {dhl.ISuggestedValues} message SuggestedValues message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuggestedValues.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuggestedValues message from the specified reader or buffer.
         * @function decode
         * @memberof dhl.SuggestedValues
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dhl.SuggestedValues} SuggestedValues
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuggestedValues.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dhl.SuggestedValues();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.text = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SuggestedValues message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dhl.SuggestedValues
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dhl.SuggestedValues} SuggestedValues
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuggestedValues.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SuggestedValues message.
         * @function verify
         * @memberof dhl.SuggestedValues
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SuggestedValues.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.text != null && message.hasOwnProperty("text")) {
                properties.value = 1;
                if (!$util.isString(message.text))
                    return "text: string expected";
            }
            return null;
        };

        /**
         * Creates a SuggestedValues message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dhl.SuggestedValues
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dhl.SuggestedValues} SuggestedValues
         */
        SuggestedValues.fromObject = function fromObject(object) {
            if (object instanceof $root.dhl.SuggestedValues)
                return object;
            var message = new $root.dhl.SuggestedValues();
            if (object.text != null)
                message.text = String(object.text);
            return message;
        };

        /**
         * Creates a plain object from a SuggestedValues message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dhl.SuggestedValues
         * @static
         * @param {dhl.SuggestedValues} message SuggestedValues
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SuggestedValues.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.text != null && message.hasOwnProperty("text")) {
                object.text = message.text;
                if (options.oneofs)
                    object.value = "text";
            }
            return object;
        };

        /**
         * Converts this SuggestedValues to JSON.
         * @function toJSON
         * @memberof dhl.SuggestedValues
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuggestedValues.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuggestedValues;
    })();

    dhl.DHLScript = (function() {

        /**
         * Properties of a DHLScript.
         * @memberof dhl
         * @interface IDHLScript
         * @property {dhl.IScript|null} [script] DHLScript script
         * @property {Array.<string>|null} [candidates] DHLScript candidates
         * @property {string|null} [modifiedQuery] DHLScript modifiedQuery
         * @property {string|null} [message] DHLScript message
         * @property {dhl.IDHLAgentResponse|null} [agentResponse] DHLScript agentResponse
         * @property {dhl.IDHLChatResponse|null} [chatResponse] DHLScript chatResponse
         * @property {Array.<dhl.ISuggestedValues>|null} [suggestedValues] DHLScript suggestedValues
         */

        /**
         * Constructs a new DHLScript.
         * @memberof dhl
         * @classdesc Represents a DHLScript.
         * @implements IDHLScript
         * @constructor
         * @param {dhl.IDHLScript=} [properties] Properties to set
         */
        function DHLScript(properties) {
            this.candidates = [];
            this.suggestedValues = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DHLScript script.
         * @member {dhl.IScript|null|undefined} script
         * @memberof dhl.DHLScript
         * @instance
         */
        DHLScript.prototype.script = null;

        /**
         * DHLScript candidates.
         * @member {Array.<string>} candidates
         * @memberof dhl.DHLScript
         * @instance
         */
        DHLScript.prototype.candidates = $util.emptyArray;

        /**
         * DHLScript modifiedQuery.
         * @member {string} modifiedQuery
         * @memberof dhl.DHLScript
         * @instance
         */
        DHLScript.prototype.modifiedQuery = "";

        /**
         * DHLScript message.
         * @member {string} message
         * @memberof dhl.DHLScript
         * @instance
         */
        DHLScript.prototype.message = "";

        /**
         * DHLScript agentResponse.
         * @member {dhl.IDHLAgentResponse|null|undefined} agentResponse
         * @memberof dhl.DHLScript
         * @instance
         */
        DHLScript.prototype.agentResponse = null;

        /**
         * DHLScript chatResponse.
         * @member {dhl.IDHLChatResponse|null|undefined} chatResponse
         * @memberof dhl.DHLScript
         * @instance
         */
        DHLScript.prototype.chatResponse = null;

        /**
         * DHLScript suggestedValues.
         * @member {Array.<dhl.ISuggestedValues>} suggestedValues
         * @memberof dhl.DHLScript
         * @instance
         */
        DHLScript.prototype.suggestedValues = $util.emptyArray;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * DHLScript dhlResponse.
         * @member {"agentResponse"|"chatResponse"|undefined} dhlResponse
         * @memberof dhl.DHLScript
         * @instance
         */
        Object.defineProperty(DHLScript.prototype, "dhlResponse", {
            get: $util.oneOfGetter($oneOfFields = ["agentResponse", "chatResponse"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new DHLScript instance using the specified properties.
         * @function create
         * @memberof dhl.DHLScript
         * @static
         * @param {dhl.IDHLScript=} [properties] Properties to set
         * @returns {dhl.DHLScript} DHLScript instance
         */
        DHLScript.create = function create(properties) {
            return new DHLScript(properties);
        };

        /**
         * Encodes the specified DHLScript message. Does not implicitly {@link dhl.DHLScript.verify|verify} messages.
         * @function encode
         * @memberof dhl.DHLScript
         * @static
         * @param {dhl.IDHLScript} message DHLScript message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DHLScript.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.script != null && message.hasOwnProperty("script"))
                $root.dhl.Script.encode(message.script, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.candidates != null && message.candidates.length)
                for (var i = 0; i < message.candidates.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.candidates[i]);
            if (message.modifiedQuery != null && message.hasOwnProperty("modifiedQuery"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.modifiedQuery);
            if (message.message != null && message.hasOwnProperty("message"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.message);
            if (message.agentResponse != null && message.hasOwnProperty("agentResponse"))
                $root.dhl.DHLAgentResponse.encode(message.agentResponse, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.chatResponse != null && message.hasOwnProperty("chatResponse"))
                $root.dhl.DHLChatResponse.encode(message.chatResponse, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.suggestedValues != null && message.suggestedValues.length)
                for (var i = 0; i < message.suggestedValues.length; ++i)
                    $root.dhl.SuggestedValues.encode(message.suggestedValues[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified DHLScript message, length delimited. Does not implicitly {@link dhl.DHLScript.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dhl.DHLScript
         * @static
         * @param {dhl.IDHLScript} message DHLScript message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DHLScript.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DHLScript message from the specified reader or buffer.
         * @function decode
         * @memberof dhl.DHLScript
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dhl.DHLScript} DHLScript
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DHLScript.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dhl.DHLScript();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.script = $root.dhl.Script.decode(reader, reader.uint32());
                    break;
                case 2:
                    if (!(message.candidates && message.candidates.length))
                        message.candidates = [];
                    message.candidates.push(reader.string());
                    break;
                case 3:
                    message.modifiedQuery = reader.string();
                    break;
                case 4:
                    message.message = reader.string();
                    break;
                case 5:
                    message.agentResponse = $root.dhl.DHLAgentResponse.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.chatResponse = $root.dhl.DHLChatResponse.decode(reader, reader.uint32());
                    break;
                case 7:
                    if (!(message.suggestedValues && message.suggestedValues.length))
                        message.suggestedValues = [];
                    message.suggestedValues.push($root.dhl.SuggestedValues.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DHLScript message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dhl.DHLScript
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dhl.DHLScript} DHLScript
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DHLScript.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DHLScript message.
         * @function verify
         * @memberof dhl.DHLScript
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DHLScript.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.script != null && message.hasOwnProperty("script")) {
                var error = $root.dhl.Script.verify(message.script);
                if (error)
                    return "script." + error;
            }
            if (message.candidates != null && message.hasOwnProperty("candidates")) {
                if (!Array.isArray(message.candidates))
                    return "candidates: array expected";
                for (var i = 0; i < message.candidates.length; ++i)
                    if (!$util.isString(message.candidates[i]))
                        return "candidates: string[] expected";
            }
            if (message.modifiedQuery != null && message.hasOwnProperty("modifiedQuery"))
                if (!$util.isString(message.modifiedQuery))
                    return "modifiedQuery: string expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            if (message.agentResponse != null && message.hasOwnProperty("agentResponse")) {
                properties.dhlResponse = 1;
                {
                    var error = $root.dhl.DHLAgentResponse.verify(message.agentResponse);
                    if (error)
                        return "agentResponse." + error;
                }
            }
            if (message.chatResponse != null && message.hasOwnProperty("chatResponse")) {
                if (properties.dhlResponse === 1)
                    return "dhlResponse: multiple values";
                properties.dhlResponse = 1;
                {
                    var error = $root.dhl.DHLChatResponse.verify(message.chatResponse);
                    if (error)
                        return "chatResponse." + error;
                }
            }
            if (message.suggestedValues != null && message.hasOwnProperty("suggestedValues")) {
                if (!Array.isArray(message.suggestedValues))
                    return "suggestedValues: array expected";
                for (var i = 0; i < message.suggestedValues.length; ++i) {
                    var error = $root.dhl.SuggestedValues.verify(message.suggestedValues[i]);
                    if (error)
                        return "suggestedValues." + error;
                }
            }
            return null;
        };

        /**
         * Creates a DHLScript message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dhl.DHLScript
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dhl.DHLScript} DHLScript
         */
        DHLScript.fromObject = function fromObject(object) {
            if (object instanceof $root.dhl.DHLScript)
                return object;
            var message = new $root.dhl.DHLScript();
            if (object.script != null) {
                if (typeof object.script !== "object")
                    throw TypeError(".dhl.DHLScript.script: object expected");
                message.script = $root.dhl.Script.fromObject(object.script);
            }
            if (object.candidates) {
                if (!Array.isArray(object.candidates))
                    throw TypeError(".dhl.DHLScript.candidates: array expected");
                message.candidates = [];
                for (var i = 0; i < object.candidates.length; ++i)
                    message.candidates[i] = String(object.candidates[i]);
            }
            if (object.modifiedQuery != null)
                message.modifiedQuery = String(object.modifiedQuery);
            if (object.message != null)
                message.message = String(object.message);
            if (object.agentResponse != null) {
                if (typeof object.agentResponse !== "object")
                    throw TypeError(".dhl.DHLScript.agentResponse: object expected");
                message.agentResponse = $root.dhl.DHLAgentResponse.fromObject(object.agentResponse);
            }
            if (object.chatResponse != null) {
                if (typeof object.chatResponse !== "object")
                    throw TypeError(".dhl.DHLScript.chatResponse: object expected");
                message.chatResponse = $root.dhl.DHLChatResponse.fromObject(object.chatResponse);
            }
            if (object.suggestedValues) {
                if (!Array.isArray(object.suggestedValues))
                    throw TypeError(".dhl.DHLScript.suggestedValues: array expected");
                message.suggestedValues = [];
                for (var i = 0; i < object.suggestedValues.length; ++i) {
                    if (typeof object.suggestedValues[i] !== "object")
                        throw TypeError(".dhl.DHLScript.suggestedValues: object expected");
                    message.suggestedValues[i] = $root.dhl.SuggestedValues.fromObject(object.suggestedValues[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a DHLScript message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dhl.DHLScript
         * @static
         * @param {dhl.DHLScript} message DHLScript
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DHLScript.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.candidates = [];
                object.suggestedValues = [];
            }
            if (options.defaults) {
                object.script = null;
                object.modifiedQuery = "";
                object.message = "";
            }
            if (message.script != null && message.hasOwnProperty("script"))
                object.script = $root.dhl.Script.toObject(message.script, options);
            if (message.candidates && message.candidates.length) {
                object.candidates = [];
                for (var j = 0; j < message.candidates.length; ++j)
                    object.candidates[j] = message.candidates[j];
            }
            if (message.modifiedQuery != null && message.hasOwnProperty("modifiedQuery"))
                object.modifiedQuery = message.modifiedQuery;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            if (message.agentResponse != null && message.hasOwnProperty("agentResponse")) {
                object.agentResponse = $root.dhl.DHLAgentResponse.toObject(message.agentResponse, options);
                if (options.oneofs)
                    object.dhlResponse = "agentResponse";
            }
            if (message.chatResponse != null && message.hasOwnProperty("chatResponse")) {
                object.chatResponse = $root.dhl.DHLChatResponse.toObject(message.chatResponse, options);
                if (options.oneofs)
                    object.dhlResponse = "chatResponse";
            }
            if (message.suggestedValues && message.suggestedValues.length) {
                object.suggestedValues = [];
                for (var j = 0; j < message.suggestedValues.length; ++j)
                    object.suggestedValues[j] = $root.dhl.SuggestedValues.toObject(message.suggestedValues[j], options);
            }
            return object;
        };

        /**
         * Converts this DHLScript to JSON.
         * @function toJSON
         * @memberof dhl.DHLScript
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DHLScript.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DHLScript;
    })();

    dhl.DynamicEntityValue = (function() {

        /**
         * Properties of a DynamicEntityValue.
         * @memberof dhl
         * @interface IDynamicEntityValue
         * @property {string|null} [keyword] DynamicEntityValue keyword
         * @property {Array.<string>|null} [aliases] DynamicEntityValue aliases
         */

        /**
         * Constructs a new DynamicEntityValue.
         * @memberof dhl
         * @classdesc Represents a DynamicEntityValue.
         * @implements IDynamicEntityValue
         * @constructor
         * @param {dhl.IDynamicEntityValue=} [properties] Properties to set
         */
        function DynamicEntityValue(properties) {
            this.aliases = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DynamicEntityValue keyword.
         * @member {string} keyword
         * @memberof dhl.DynamicEntityValue
         * @instance
         */
        DynamicEntityValue.prototype.keyword = "";

        /**
         * DynamicEntityValue aliases.
         * @member {Array.<string>} aliases
         * @memberof dhl.DynamicEntityValue
         * @instance
         */
        DynamicEntityValue.prototype.aliases = $util.emptyArray;

        /**
         * Creates a new DynamicEntityValue instance using the specified properties.
         * @function create
         * @memberof dhl.DynamicEntityValue
         * @static
         * @param {dhl.IDynamicEntityValue=} [properties] Properties to set
         * @returns {dhl.DynamicEntityValue} DynamicEntityValue instance
         */
        DynamicEntityValue.create = function create(properties) {
            return new DynamicEntityValue(properties);
        };

        /**
         * Encodes the specified DynamicEntityValue message. Does not implicitly {@link dhl.DynamicEntityValue.verify|verify} messages.
         * @function encode
         * @memberof dhl.DynamicEntityValue
         * @static
         * @param {dhl.IDynamicEntityValue} message DynamicEntityValue message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DynamicEntityValue.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.keyword != null && message.hasOwnProperty("keyword"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.keyword);
            if (message.aliases != null && message.aliases.length)
                for (var i = 0; i < message.aliases.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.aliases[i]);
            return writer;
        };

        /**
         * Encodes the specified DynamicEntityValue message, length delimited. Does not implicitly {@link dhl.DynamicEntityValue.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dhl.DynamicEntityValue
         * @static
         * @param {dhl.IDynamicEntityValue} message DynamicEntityValue message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DynamicEntityValue.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DynamicEntityValue message from the specified reader or buffer.
         * @function decode
         * @memberof dhl.DynamicEntityValue
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dhl.DynamicEntityValue} DynamicEntityValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DynamicEntityValue.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dhl.DynamicEntityValue();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.keyword = reader.string();
                    break;
                case 2:
                    if (!(message.aliases && message.aliases.length))
                        message.aliases = [];
                    message.aliases.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DynamicEntityValue message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dhl.DynamicEntityValue
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dhl.DynamicEntityValue} DynamicEntityValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DynamicEntityValue.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DynamicEntityValue message.
         * @function verify
         * @memberof dhl.DynamicEntityValue
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DynamicEntityValue.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.keyword != null && message.hasOwnProperty("keyword"))
                if (!$util.isString(message.keyword))
                    return "keyword: string expected";
            if (message.aliases != null && message.hasOwnProperty("aliases")) {
                if (!Array.isArray(message.aliases))
                    return "aliases: array expected";
                for (var i = 0; i < message.aliases.length; ++i)
                    if (!$util.isString(message.aliases[i]))
                        return "aliases: string[] expected";
            }
            return null;
        };

        /**
         * Creates a DynamicEntityValue message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dhl.DynamicEntityValue
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dhl.DynamicEntityValue} DynamicEntityValue
         */
        DynamicEntityValue.fromObject = function fromObject(object) {
            if (object instanceof $root.dhl.DynamicEntityValue)
                return object;
            var message = new $root.dhl.DynamicEntityValue();
            if (object.keyword != null)
                message.keyword = String(object.keyword);
            if (object.aliases) {
                if (!Array.isArray(object.aliases))
                    throw TypeError(".dhl.DynamicEntityValue.aliases: array expected");
                message.aliases = [];
                for (var i = 0; i < object.aliases.length; ++i)
                    message.aliases[i] = String(object.aliases[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a DynamicEntityValue message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dhl.DynamicEntityValue
         * @static
         * @param {dhl.DynamicEntityValue} message DynamicEntityValue
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DynamicEntityValue.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.aliases = [];
            if (options.defaults)
                object.keyword = "";
            if (message.keyword != null && message.hasOwnProperty("keyword"))
                object.keyword = message.keyword;
            if (message.aliases && message.aliases.length) {
                object.aliases = [];
                for (var j = 0; j < message.aliases.length; ++j)
                    object.aliases[j] = message.aliases[j];
            }
            return object;
        };

        /**
         * Converts this DynamicEntityValue to JSON.
         * @function toJSON
         * @memberof dhl.DynamicEntityValue
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DynamicEntityValue.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DynamicEntityValue;
    })();

    dhl.DynamicEntity = (function() {

        /**
         * Properties of a DynamicEntity.
         * @memberof dhl
         * @interface IDynamicEntity
         * @property {string|null} [typeName] DynamicEntity typeName
         * @property {Array.<dhl.IDynamicEntityValue>|null} [values] DynamicEntity values
         */

        /**
         * Constructs a new DynamicEntity.
         * @memberof dhl
         * @classdesc Represents a DynamicEntity.
         * @implements IDynamicEntity
         * @constructor
         * @param {dhl.IDynamicEntity=} [properties] Properties to set
         */
        function DynamicEntity(properties) {
            this.values = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DynamicEntity typeName.
         * @member {string} typeName
         * @memberof dhl.DynamicEntity
         * @instance
         */
        DynamicEntity.prototype.typeName = "";

        /**
         * DynamicEntity values.
         * @member {Array.<dhl.IDynamicEntityValue>} values
         * @memberof dhl.DynamicEntity
         * @instance
         */
        DynamicEntity.prototype.values = $util.emptyArray;

        /**
         * Creates a new DynamicEntity instance using the specified properties.
         * @function create
         * @memberof dhl.DynamicEntity
         * @static
         * @param {dhl.IDynamicEntity=} [properties] Properties to set
         * @returns {dhl.DynamicEntity} DynamicEntity instance
         */
        DynamicEntity.create = function create(properties) {
            return new DynamicEntity(properties);
        };

        /**
         * Encodes the specified DynamicEntity message. Does not implicitly {@link dhl.DynamicEntity.verify|verify} messages.
         * @function encode
         * @memberof dhl.DynamicEntity
         * @static
         * @param {dhl.IDynamicEntity} message DynamicEntity message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DynamicEntity.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.typeName != null && message.hasOwnProperty("typeName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.typeName);
            if (message.values != null && message.values.length)
                for (var i = 0; i < message.values.length; ++i)
                    $root.dhl.DynamicEntityValue.encode(message.values[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified DynamicEntity message, length delimited. Does not implicitly {@link dhl.DynamicEntity.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dhl.DynamicEntity
         * @static
         * @param {dhl.IDynamicEntity} message DynamicEntity message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DynamicEntity.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DynamicEntity message from the specified reader or buffer.
         * @function decode
         * @memberof dhl.DynamicEntity
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dhl.DynamicEntity} DynamicEntity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DynamicEntity.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dhl.DynamicEntity();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.typeName = reader.string();
                    break;
                case 2:
                    if (!(message.values && message.values.length))
                        message.values = [];
                    message.values.push($root.dhl.DynamicEntityValue.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DynamicEntity message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dhl.DynamicEntity
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dhl.DynamicEntity} DynamicEntity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DynamicEntity.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DynamicEntity message.
         * @function verify
         * @memberof dhl.DynamicEntity
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DynamicEntity.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.typeName != null && message.hasOwnProperty("typeName"))
                if (!$util.isString(message.typeName))
                    return "typeName: string expected";
            if (message.values != null && message.hasOwnProperty("values")) {
                if (!Array.isArray(message.values))
                    return "values: array expected";
                for (var i = 0; i < message.values.length; ++i) {
                    var error = $root.dhl.DynamicEntityValue.verify(message.values[i]);
                    if (error)
                        return "values." + error;
                }
            }
            return null;
        };

        /**
         * Creates a DynamicEntity message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dhl.DynamicEntity
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dhl.DynamicEntity} DynamicEntity
         */
        DynamicEntity.fromObject = function fromObject(object) {
            if (object instanceof $root.dhl.DynamicEntity)
                return object;
            var message = new $root.dhl.DynamicEntity();
            if (object.typeName != null)
                message.typeName = String(object.typeName);
            if (object.values) {
                if (!Array.isArray(object.values))
                    throw TypeError(".dhl.DynamicEntity.values: array expected");
                message.values = [];
                for (var i = 0; i < object.values.length; ++i) {
                    if (typeof object.values[i] !== "object")
                        throw TypeError(".dhl.DynamicEntity.values: object expected");
                    message.values[i] = $root.dhl.DynamicEntityValue.fromObject(object.values[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a DynamicEntity message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dhl.DynamicEntity
         * @static
         * @param {dhl.DynamicEntity} message DynamicEntity
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DynamicEntity.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.values = [];
            if (options.defaults)
                object.typeName = "";
            if (message.typeName != null && message.hasOwnProperty("typeName"))
                object.typeName = message.typeName;
            if (message.values && message.values.length) {
                object.values = [];
                for (var j = 0; j < message.values.length; ++j)
                    object.values[j] = $root.dhl.DynamicEntityValue.toObject(message.values[j], options);
            }
            return object;
        };

        /**
         * Converts this DynamicEntity to JSON.
         * @function toJSON
         * @memberof dhl.DynamicEntity
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DynamicEntity.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DynamicEntity;
    })();

    dhl.FilledAttribute = (function() {

        /**
         * Properties of a FilledAttribute.
         * @memberof dhl
         * @interface IFilledAttribute
         * @property {string|null} [name] FilledAttribute name
         * @property {string|null} [value] FilledAttribute value
         * @property {number|Long|null} [timestamp] FilledAttribute timestamp
         */

        /**
         * Constructs a new FilledAttribute.
         * @memberof dhl
         * @classdesc Represents a FilledAttribute.
         * @implements IFilledAttribute
         * @constructor
         * @param {dhl.IFilledAttribute=} [properties] Properties to set
         */
        function FilledAttribute(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FilledAttribute name.
         * @member {string} name
         * @memberof dhl.FilledAttribute
         * @instance
         */
        FilledAttribute.prototype.name = "";

        /**
         * FilledAttribute value.
         * @member {string} value
         * @memberof dhl.FilledAttribute
         * @instance
         */
        FilledAttribute.prototype.value = "";

        /**
         * FilledAttribute timestamp.
         * @member {number|Long} timestamp
         * @memberof dhl.FilledAttribute
         * @instance
         */
        FilledAttribute.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new FilledAttribute instance using the specified properties.
         * @function create
         * @memberof dhl.FilledAttribute
         * @static
         * @param {dhl.IFilledAttribute=} [properties] Properties to set
         * @returns {dhl.FilledAttribute} FilledAttribute instance
         */
        FilledAttribute.create = function create(properties) {
            return new FilledAttribute(properties);
        };

        /**
         * Encodes the specified FilledAttribute message. Does not implicitly {@link dhl.FilledAttribute.verify|verify} messages.
         * @function encode
         * @memberof dhl.FilledAttribute
         * @static
         * @param {dhl.IFilledAttribute} message FilledAttribute message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FilledAttribute.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.value != null && message.hasOwnProperty("value"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.value);
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.timestamp);
            return writer;
        };

        /**
         * Encodes the specified FilledAttribute message, length delimited. Does not implicitly {@link dhl.FilledAttribute.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dhl.FilledAttribute
         * @static
         * @param {dhl.IFilledAttribute} message FilledAttribute message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FilledAttribute.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FilledAttribute message from the specified reader or buffer.
         * @function decode
         * @memberof dhl.FilledAttribute
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dhl.FilledAttribute} FilledAttribute
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FilledAttribute.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dhl.FilledAttribute();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                case 3:
                    message.timestamp = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FilledAttribute message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dhl.FilledAttribute
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dhl.FilledAttribute} FilledAttribute
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FilledAttribute.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FilledAttribute message.
         * @function verify
         * @memberof dhl.FilledAttribute
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FilledAttribute.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!$util.isString(message.value))
                    return "value: string expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            return null;
        };

        /**
         * Creates a FilledAttribute message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dhl.FilledAttribute
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dhl.FilledAttribute} FilledAttribute
         */
        FilledAttribute.fromObject = function fromObject(object) {
            if (object instanceof $root.dhl.FilledAttribute)
                return object;
            var message = new $root.dhl.FilledAttribute();
            if (object.name != null)
                message.name = String(object.name);
            if (object.value != null)
                message.value = String(object.value);
            if (object.timestamp != null)
                if ($util.Long)
                    (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                else if (typeof object.timestamp === "string")
                    message.timestamp = parseInt(object.timestamp, 10);
                else if (typeof object.timestamp === "number")
                    message.timestamp = object.timestamp;
                else if (typeof object.timestamp === "object")
                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a FilledAttribute message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dhl.FilledAttribute
         * @static
         * @param {dhl.FilledAttribute} message FilledAttribute
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FilledAttribute.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.name = "";
                object.value = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestamp = options.longs === String ? "0" : 0;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = message.value;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
            return object;
        };

        /**
         * Converts this FilledAttribute to JSON.
         * @function toJSON
         * @memberof dhl.FilledAttribute
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FilledAttribute.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FilledAttribute;
    })();

    return dhl;
})();

$root.dhlmixer = (function() {

    /**
     * Namespace dhlmixer.
     * @exports dhlmixer
     * @namespace
     */
    var dhlmixer = {};

    dhlmixer.DHLMixer = (function() {

        /**
         * Constructs a new DHLMixer service.
         * @memberof dhlmixer
         * @classdesc Represents a DHLMixer
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function DHLMixer(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (DHLMixer.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = DHLMixer;

        /**
         * Creates new DHLMixer service using the specified rpc implementation.
         * @function create
         * @memberof dhlmixer.DHLMixer
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {DHLMixer} RPC service. Useful where requests and/or responses are streamed.
         */
        DHLMixer.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link dhlmixer.DHLMixer#sendMessage}.
         * @memberof dhlmixer.DHLMixer
         * @typedef SendMessageCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {dhlmixer.DHLMixerError} [response] DHLMixerError
         */

        /**
         * Calls SendMessage.
         * @function sendMessage
         * @memberof dhlmixer.DHLMixer
         * @instance
         * @param {dhlmixer.IDHLMixerRequest} request DHLMixerRequest message or plain object
         * @param {dhlmixer.DHLMixer.SendMessageCallback} callback Node-style callback called with the error, if any, and DHLMixerError
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(DHLMixer.prototype.sendMessage = function sendMessage(request, callback) {
            return this.rpcCall(sendMessage, $root.dhlmixer.DHLMixerRequest, $root.dhlmixer.DHLMixerError, request, callback);
        }, "name", { value: "SendMessage" });

        /**
         * Calls SendMessage.
         * @function sendMessage
         * @memberof dhlmixer.DHLMixer
         * @instance
         * @param {dhlmixer.IDHLMixerRequest} request DHLMixerRequest message or plain object
         * @returns {Promise<dhlmixer.DHLMixerError>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link dhlmixer.DHLMixer#pollForResponse}.
         * @memberof dhlmixer.DHLMixer
         * @typedef PollForResponseCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {dhlmixer.DHLMixerResponse} [response] DHLMixerResponse
         */

        /**
         * Calls PollForResponse.
         * @function pollForResponse
         * @memberof dhlmixer.DHLMixer
         * @instance
         * @param {dhlmixer.IKerfuPollRequest} request KerfuPollRequest message or plain object
         * @param {dhlmixer.DHLMixer.PollForResponseCallback} callback Node-style callback called with the error, if any, and DHLMixerResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(DHLMixer.prototype.pollForResponse = function pollForResponse(request, callback) {
            return this.rpcCall(pollForResponse, $root.dhlmixer.KerfuPollRequest, $root.dhlmixer.DHLMixerResponse, request, callback);
        }, "name", { value: "PollForResponse" });

        /**
         * Calls PollForResponse.
         * @function pollForResponse
         * @memberof dhlmixer.DHLMixer
         * @instance
         * @param {dhlmixer.IKerfuPollRequest} request KerfuPollRequest message or plain object
         * @returns {Promise<dhlmixer.DHLMixerResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link dhlmixer.DHLMixer#sendKerfuMessage}.
         * @memberof dhlmixer.DHLMixer
         * @typedef SendKerfuMessageCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {dhlmixer.DHLMixerError} [response] DHLMixerError
         */

        /**
         * Calls SendKerfuMessage.
         * @function sendKerfuMessage
         * @memberof dhlmixer.DHLMixer
         * @instance
         * @param {dhlmixer.IKerfuMessageDep} request KerfuMessageDep message or plain object
         * @param {dhlmixer.DHLMixer.SendKerfuMessageCallback} callback Node-style callback called with the error, if any, and DHLMixerError
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(DHLMixer.prototype.sendKerfuMessage = function sendKerfuMessage(request, callback) {
            return this.rpcCall(sendKerfuMessage, $root.dhlmixer.KerfuMessageDep, $root.dhlmixer.DHLMixerError, request, callback);
        }, "name", { value: "SendKerfuMessage" });

        /**
         * Calls SendKerfuMessage.
         * @function sendKerfuMessage
         * @memberof dhlmixer.DHLMixer
         * @instance
         * @param {dhlmixer.IKerfuMessageDep} request KerfuMessageDep message or plain object
         * @returns {Promise<dhlmixer.DHLMixerError>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link dhlmixer.DHLMixer#pollForKerfuMessage}.
         * @memberof dhlmixer.DHLMixer
         * @typedef PollForKerfuMessageCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {dhlmixer.KerfuMessageDep} [response] KerfuMessageDep
         */

        /**
         * Calls PollForKerfuMessage.
         * @function pollForKerfuMessage
         * @memberof dhlmixer.DHLMixer
         * @instance
         * @param {dhlmixer.IKerfuPollRequest} request KerfuPollRequest message or plain object
         * @param {dhlmixer.DHLMixer.PollForKerfuMessageCallback} callback Node-style callback called with the error, if any, and KerfuMessageDep
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(DHLMixer.prototype.pollForKerfuMessage = function pollForKerfuMessage(request, callback) {
            return this.rpcCall(pollForKerfuMessage, $root.dhlmixer.KerfuPollRequest, $root.dhlmixer.KerfuMessageDep, request, callback);
        }, "name", { value: "PollForKerfuMessage" });

        /**
         * Calls PollForKerfuMessage.
         * @function pollForKerfuMessage
         * @memberof dhlmixer.DHLMixer
         * @instance
         * @param {dhlmixer.IKerfuPollRequest} request KerfuPollRequest message or plain object
         * @returns {Promise<dhlmixer.KerfuMessageDep>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link dhlmixer.DHLMixer#speech}.
         * @memberof dhlmixer.DHLMixer
         * @typedef SpeechCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {dhlmixer.SpeechResult} [response] SpeechResult
         */

        /**
         * Calls Speech.
         * @function speech
         * @memberof dhlmixer.DHLMixer
         * @instance
         * @param {dhlmixer.ISpeechData} request SpeechData message or plain object
         * @param {dhlmixer.DHLMixer.SpeechCallback} callback Node-style callback called with the error, if any, and SpeechResult
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(DHLMixer.prototype.speech = function speech(request, callback) {
            return this.rpcCall(speech, $root.dhlmixer.SpeechData, $root.dhlmixer.SpeechResult, request, callback);
        }, "name", { value: "Speech" });

        /**
         * Calls Speech.
         * @function speech
         * @memberof dhlmixer.DHLMixer
         * @instance
         * @param {dhlmixer.ISpeechData} request SpeechData message or plain object
         * @returns {Promise<dhlmixer.SpeechResult>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link dhlmixer.DHLMixer#sendVerificationSms}.
         * @memberof dhlmixer.DHLMixer
         * @typedef SendVerificationSmsCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {dhlmixer.KerfuError} [response] KerfuError
         */

        /**
         * Calls SendVerificationSms.
         * @function sendVerificationSms
         * @memberof dhlmixer.DHLMixer
         * @instance
         * @param {dhlmixer.ISendSMSRequest} request SendSMSRequest message or plain object
         * @param {dhlmixer.DHLMixer.SendVerificationSmsCallback} callback Node-style callback called with the error, if any, and KerfuError
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(DHLMixer.prototype.sendVerificationSms = function sendVerificationSms(request, callback) {
            return this.rpcCall(sendVerificationSms, $root.dhlmixer.SendSMSRequest, $root.dhlmixer.KerfuError, request, callback);
        }, "name", { value: "SendVerificationSms" });

        /**
         * Calls SendVerificationSms.
         * @function sendVerificationSms
         * @memberof dhlmixer.DHLMixer
         * @instance
         * @param {dhlmixer.ISendSMSRequest} request SendSMSRequest message or plain object
         * @returns {Promise<dhlmixer.KerfuError>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link dhlmixer.DHLMixer#loginWithVerificationCode}.
         * @memberof dhlmixer.DHLMixer
         * @typedef LoginWithVerificationCodeCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {dhlmixer.LoginResponse} [response] LoginResponse
         */

        /**
         * Calls LoginWithVerificationCode.
         * @function loginWithVerificationCode
         * @memberof dhlmixer.DHLMixer
         * @instance
         * @param {dhlmixer.ILoginRequest} request LoginRequest message or plain object
         * @param {dhlmixer.DHLMixer.LoginWithVerificationCodeCallback} callback Node-style callback called with the error, if any, and LoginResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(DHLMixer.prototype.loginWithVerificationCode = function loginWithVerificationCode(request, callback) {
            return this.rpcCall(loginWithVerificationCode, $root.dhlmixer.LoginRequest, $root.dhlmixer.LoginResponse, request, callback);
        }, "name", { value: "LoginWithVerificationCode" });

        /**
         * Calls LoginWithVerificationCode.
         * @function loginWithVerificationCode
         * @memberof dhlmixer.DHLMixer
         * @instance
         * @param {dhlmixer.ILoginRequest} request LoginRequest message or plain object
         * @returns {Promise<dhlmixer.LoginResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link dhlmixer.DHLMixer#queryWithVoice}.
         * @memberof dhlmixer.DHLMixer
         * @typedef QueryWithVoiceCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {dhlmixer.SpeechResult} [response] SpeechResult
         */

        /**
         * Calls QueryWithVoice.
         * @function queryWithVoice
         * @memberof dhlmixer.DHLMixer
         * @instance
         * @param {dhlmixer.ISpeechData} request SpeechData message or plain object
         * @param {dhlmixer.DHLMixer.QueryWithVoiceCallback} callback Node-style callback called with the error, if any, and SpeechResult
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(DHLMixer.prototype.queryWithVoice = function queryWithVoice(request, callback) {
            return this.rpcCall(queryWithVoice, $root.dhlmixer.SpeechData, $root.dhlmixer.SpeechResult, request, callback);
        }, "name", { value: "QueryWithVoice" });

        /**
         * Calls QueryWithVoice.
         * @function queryWithVoice
         * @memberof dhlmixer.DHLMixer
         * @instance
         * @param {dhlmixer.ISpeechData} request SpeechData message or plain object
         * @returns {Promise<dhlmixer.SpeechResult>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link dhlmixer.DHLMixer#queryWithKerfuMessage}.
         * @memberof dhlmixer.DHLMixer
         * @typedef QueryWithKerfuMessageCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {dhlmixer.KerfuResponse} [response] KerfuResponse
         */

        /**
         * Calls QueryWithKerfuMessage.
         * @function queryWithKerfuMessage
         * @memberof dhlmixer.DHLMixer
         * @instance
         * @param {dhlmixer.IKerfuMessage} request KerfuMessage message or plain object
         * @param {dhlmixer.DHLMixer.QueryWithKerfuMessageCallback} callback Node-style callback called with the error, if any, and KerfuResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(DHLMixer.prototype.queryWithKerfuMessage = function queryWithKerfuMessage(request, callback) {
            return this.rpcCall(queryWithKerfuMessage, $root.dhlmixer.KerfuMessage, $root.dhlmixer.KerfuResponse, request, callback);
        }, "name", { value: "QueryWithKerfuMessage" });

        /**
         * Calls QueryWithKerfuMessage.
         * @function queryWithKerfuMessage
         * @memberof dhlmixer.DHLMixer
         * @instance
         * @param {dhlmixer.IKerfuMessage} request KerfuMessage message or plain object
         * @returns {Promise<dhlmixer.KerfuResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link dhlmixer.DHLMixer#getKerfuMessages}.
         * @memberof dhlmixer.DHLMixer
         * @typedef GetKerfuMessagesCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {dhlmixer.KerfuMessageList} [response] KerfuMessageList
         */

        /**
         * Calls GetKerfuMessages.
         * @function getKerfuMessages
         * @memberof dhlmixer.DHLMixer
         * @instance
         * @param {dhlmixer.IKerfuMessageFilter} request KerfuMessageFilter message or plain object
         * @param {dhlmixer.DHLMixer.GetKerfuMessagesCallback} callback Node-style callback called with the error, if any, and KerfuMessageList
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(DHLMixer.prototype.getKerfuMessages = function getKerfuMessages(request, callback) {
            return this.rpcCall(getKerfuMessages, $root.dhlmixer.KerfuMessageFilter, $root.dhlmixer.KerfuMessageList, request, callback);
        }, "name", { value: "GetKerfuMessages" });

        /**
         * Calls GetKerfuMessages.
         * @function getKerfuMessages
         * @memberof dhlmixer.DHLMixer
         * @instance
         * @param {dhlmixer.IKerfuMessageFilter} request KerfuMessageFilter message or plain object
         * @returns {Promise<dhlmixer.KerfuMessageList>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link dhlmixer.DHLMixer#eventConnection}.
         * @memberof dhlmixer.DHLMixer
         * @typedef EventConnectionCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {dhlmixer.KerfuEvent} [response] KerfuEvent
         */

        /**
         * Calls EventConnection.
         * @function eventConnection
         * @memberof dhlmixer.DHLMixer
         * @instance
         * @param {dhlmixer.IKerfuAction} request KerfuAction message or plain object
         * @param {dhlmixer.DHLMixer.EventConnectionCallback} callback Node-style callback called with the error, if any, and KerfuEvent
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(DHLMixer.prototype.eventConnection = function eventConnection(request, callback) {
            return this.rpcCall(eventConnection, $root.dhlmixer.KerfuAction, $root.dhlmixer.KerfuEvent, request, callback);
        }, "name", { value: "EventConnection" });

        /**
         * Calls EventConnection.
         * @function eventConnection
         * @memberof dhlmixer.DHLMixer
         * @instance
         * @param {dhlmixer.IKerfuAction} request KerfuAction message or plain object
         * @returns {Promise<dhlmixer.KerfuEvent>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link dhlmixer.DHLMixer#sendKerfuResponseProactively}.
         * @memberof dhlmixer.DHLMixer
         * @typedef SendKerfuResponseProactivelyCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {dhlmixer.KerfuMessageAck} [response] KerfuMessageAck
         */

        /**
         * Calls SendKerfuResponseProactively.
         * @function sendKerfuResponseProactively
         * @memberof dhlmixer.DHLMixer
         * @instance
         * @param {dhlmixer.IKerfuMessage} request KerfuMessage message or plain object
         * @param {dhlmixer.DHLMixer.SendKerfuResponseProactivelyCallback} callback Node-style callback called with the error, if any, and KerfuMessageAck
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(DHLMixer.prototype.sendKerfuResponseProactively = function sendKerfuResponseProactively(request, callback) {
            return this.rpcCall(sendKerfuResponseProactively, $root.dhlmixer.KerfuMessage, $root.dhlmixer.KerfuMessageAck, request, callback);
        }, "name", { value: "SendKerfuResponseProactively" });

        /**
         * Calls SendKerfuResponseProactively.
         * @function sendKerfuResponseProactively
         * @memberof dhlmixer.DHLMixer
         * @instance
         * @param {dhlmixer.IKerfuMessage} request KerfuMessage message or plain object
         * @returns {Promise<dhlmixer.KerfuMessageAck>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link dhlmixer.DHLMixer#getAccessToken}.
         * @memberof dhlmixer.DHLMixer
         * @typedef GetAccessTokenCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {dhlmixer.AccessToken} [response] AccessToken
         */

        /**
         * Calls GetAccessToken.
         * @function getAccessToken
         * @memberof dhlmixer.DHLMixer
         * @instance
         * @param {dhlmixer.IAuthenticationParams} request AuthenticationParams message or plain object
         * @param {dhlmixer.DHLMixer.GetAccessTokenCallback} callback Node-style callback called with the error, if any, and AccessToken
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(DHLMixer.prototype.getAccessToken = function getAccessToken(request, callback) {
            return this.rpcCall(getAccessToken, $root.dhlmixer.AuthenticationParams, $root.dhlmixer.AccessToken, request, callback);
        }, "name", { value: "GetAccessToken" });

        /**
         * Calls GetAccessToken.
         * @function getAccessToken
         * @memberof dhlmixer.DHLMixer
         * @instance
         * @param {dhlmixer.IAuthenticationParams} request AuthenticationParams message or plain object
         * @returns {Promise<dhlmixer.AccessToken>} Promise
         * @variation 2
         */

        return DHLMixer;
    })();

    dhlmixer.SpeechData = (function() {

        /**
         * Properties of a SpeechData.
         * @memberof dhlmixer
         * @interface ISpeechData
         * @property {string|null} [appId] SpeechData appId
         * @property {number|null} [eof] SpeechData eof
         * @property {Uint8Array|null} [rawData] SpeechData rawData
         * @property {string|null} [audioType] SpeechData audioType
         * @property {string|null} [userId] SpeechData userId
         * @property {string|null} [userInfo] SpeechData userInfo
         * @property {string|null} [platformType] SpeechData platformType
         * @property {string|null} [agentId] SpeechData agentId
         * @property {string|null} [agentName] SpeechData agentName
         * @property {string|null} [userName] SpeechData userName
         * @property {string|null} [data] SpeechData data
         * @property {boolean|null} [oneShot] SpeechData oneShot
         * @property {dhlmixer.IDHLMixerRequestData|null} [requestData] SpeechData requestData
         */

        /**
         * Constructs a new SpeechData.
         * @memberof dhlmixer
         * @classdesc Represents a SpeechData.
         * @implements ISpeechData
         * @constructor
         * @param {dhlmixer.ISpeechData=} [properties] Properties to set
         */
        function SpeechData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SpeechData appId.
         * @member {string} appId
         * @memberof dhlmixer.SpeechData
         * @instance
         */
        SpeechData.prototype.appId = "";

        /**
         * SpeechData eof.
         * @member {number} eof
         * @memberof dhlmixer.SpeechData
         * @instance
         */
        SpeechData.prototype.eof = 0;

        /**
         * SpeechData rawData.
         * @member {Uint8Array} rawData
         * @memberof dhlmixer.SpeechData
         * @instance
         */
        SpeechData.prototype.rawData = $util.newBuffer([]);

        /**
         * SpeechData audioType.
         * @member {string} audioType
         * @memberof dhlmixer.SpeechData
         * @instance
         */
        SpeechData.prototype.audioType = "";

        /**
         * SpeechData userId.
         * @member {string} userId
         * @memberof dhlmixer.SpeechData
         * @instance
         */
        SpeechData.prototype.userId = "";

        /**
         * SpeechData userInfo.
         * @member {string} userInfo
         * @memberof dhlmixer.SpeechData
         * @instance
         */
        SpeechData.prototype.userInfo = "";

        /**
         * SpeechData platformType.
         * @member {string} platformType
         * @memberof dhlmixer.SpeechData
         * @instance
         */
        SpeechData.prototype.platformType = "";

        /**
         * SpeechData agentId.
         * @member {string} agentId
         * @memberof dhlmixer.SpeechData
         * @instance
         */
        SpeechData.prototype.agentId = "";

        /**
         * SpeechData agentName.
         * @member {string} agentName
         * @memberof dhlmixer.SpeechData
         * @instance
         */
        SpeechData.prototype.agentName = "";

        /**
         * SpeechData userName.
         * @member {string} userName
         * @memberof dhlmixer.SpeechData
         * @instance
         */
        SpeechData.prototype.userName = "";

        /**
         * SpeechData data.
         * @member {string} data
         * @memberof dhlmixer.SpeechData
         * @instance
         */
        SpeechData.prototype.data = "";

        /**
         * SpeechData oneShot.
         * @member {boolean} oneShot
         * @memberof dhlmixer.SpeechData
         * @instance
         */
        SpeechData.prototype.oneShot = false;

        /**
         * SpeechData requestData.
         * @member {dhlmixer.IDHLMixerRequestData|null|undefined} requestData
         * @memberof dhlmixer.SpeechData
         * @instance
         */
        SpeechData.prototype.requestData = null;

        /**
         * Creates a new SpeechData instance using the specified properties.
         * @function create
         * @memberof dhlmixer.SpeechData
         * @static
         * @param {dhlmixer.ISpeechData=} [properties] Properties to set
         * @returns {dhlmixer.SpeechData} SpeechData instance
         */
        SpeechData.create = function create(properties) {
            return new SpeechData(properties);
        };

        /**
         * Encodes the specified SpeechData message. Does not implicitly {@link dhlmixer.SpeechData.verify|verify} messages.
         * @function encode
         * @memberof dhlmixer.SpeechData
         * @static
         * @param {dhlmixer.ISpeechData} message SpeechData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SpeechData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.appId != null && message.hasOwnProperty("appId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.appId);
            if (message.eof != null && message.hasOwnProperty("eof"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.eof);
            if (message.rawData != null && message.hasOwnProperty("rawData"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.rawData);
            if (message.audioType != null && message.hasOwnProperty("audioType"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.audioType);
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.userId);
            if (message.userInfo != null && message.hasOwnProperty("userInfo"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.userInfo);
            if (message.platformType != null && message.hasOwnProperty("platformType"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.platformType);
            if (message.agentId != null && message.hasOwnProperty("agentId"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.agentId);
            if (message.agentName != null && message.hasOwnProperty("agentName"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.agentName);
            if (message.userName != null && message.hasOwnProperty("userName"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.userName);
            if (message.data != null && message.hasOwnProperty("data"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.data);
            if (message.oneShot != null && message.hasOwnProperty("oneShot"))
                writer.uint32(/* id 12, wireType 0 =*/96).bool(message.oneShot);
            if (message.requestData != null && message.hasOwnProperty("requestData"))
                $root.dhlmixer.DHLMixerRequestData.encode(message.requestData, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SpeechData message, length delimited. Does not implicitly {@link dhlmixer.SpeechData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dhlmixer.SpeechData
         * @static
         * @param {dhlmixer.ISpeechData} message SpeechData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SpeechData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SpeechData message from the specified reader or buffer.
         * @function decode
         * @memberof dhlmixer.SpeechData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dhlmixer.SpeechData} SpeechData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SpeechData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dhlmixer.SpeechData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.appId = reader.string();
                    break;
                case 2:
                    message.eof = reader.int32();
                    break;
                case 3:
                    message.rawData = reader.bytes();
                    break;
                case 4:
                    message.audioType = reader.string();
                    break;
                case 5:
                    message.userId = reader.string();
                    break;
                case 6:
                    message.userInfo = reader.string();
                    break;
                case 7:
                    message.platformType = reader.string();
                    break;
                case 8:
                    message.agentId = reader.string();
                    break;
                case 9:
                    message.agentName = reader.string();
                    break;
                case 10:
                    message.userName = reader.string();
                    break;
                case 11:
                    message.data = reader.string();
                    break;
                case 12:
                    message.oneShot = reader.bool();
                    break;
                case 13:
                    message.requestData = $root.dhlmixer.DHLMixerRequestData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SpeechData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dhlmixer.SpeechData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dhlmixer.SpeechData} SpeechData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SpeechData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SpeechData message.
         * @function verify
         * @memberof dhlmixer.SpeechData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SpeechData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.appId != null && message.hasOwnProperty("appId"))
                if (!$util.isString(message.appId))
                    return "appId: string expected";
            if (message.eof != null && message.hasOwnProperty("eof"))
                if (!$util.isInteger(message.eof))
                    return "eof: integer expected";
            if (message.rawData != null && message.hasOwnProperty("rawData"))
                if (!(message.rawData && typeof message.rawData.length === "number" || $util.isString(message.rawData)))
                    return "rawData: buffer expected";
            if (message.audioType != null && message.hasOwnProperty("audioType"))
                if (!$util.isString(message.audioType))
                    return "audioType: string expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isString(message.userId))
                    return "userId: string expected";
            if (message.userInfo != null && message.hasOwnProperty("userInfo"))
                if (!$util.isString(message.userInfo))
                    return "userInfo: string expected";
            if (message.platformType != null && message.hasOwnProperty("platformType"))
                if (!$util.isString(message.platformType))
                    return "platformType: string expected";
            if (message.agentId != null && message.hasOwnProperty("agentId"))
                if (!$util.isString(message.agentId))
                    return "agentId: string expected";
            if (message.agentName != null && message.hasOwnProperty("agentName"))
                if (!$util.isString(message.agentName))
                    return "agentName: string expected";
            if (message.userName != null && message.hasOwnProperty("userName"))
                if (!$util.isString(message.userName))
                    return "userName: string expected";
            if (message.data != null && message.hasOwnProperty("data"))
                if (!$util.isString(message.data))
                    return "data: string expected";
            if (message.oneShot != null && message.hasOwnProperty("oneShot"))
                if (typeof message.oneShot !== "boolean")
                    return "oneShot: boolean expected";
            if (message.requestData != null && message.hasOwnProperty("requestData")) {
                var error = $root.dhlmixer.DHLMixerRequestData.verify(message.requestData);
                if (error)
                    return "requestData." + error;
            }
            return null;
        };

        /**
         * Creates a SpeechData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dhlmixer.SpeechData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dhlmixer.SpeechData} SpeechData
         */
        SpeechData.fromObject = function fromObject(object) {
            if (object instanceof $root.dhlmixer.SpeechData)
                return object;
            var message = new $root.dhlmixer.SpeechData();
            if (object.appId != null)
                message.appId = String(object.appId);
            if (object.eof != null)
                message.eof = object.eof | 0;
            if (object.rawData != null)
                if (typeof object.rawData === "string")
                    $util.base64.decode(object.rawData, message.rawData = $util.newBuffer($util.base64.length(object.rawData)), 0);
                else if (object.rawData.length)
                    message.rawData = object.rawData;
            if (object.audioType != null)
                message.audioType = String(object.audioType);
            if (object.userId != null)
                message.userId = String(object.userId);
            if (object.userInfo != null)
                message.userInfo = String(object.userInfo);
            if (object.platformType != null)
                message.platformType = String(object.platformType);
            if (object.agentId != null)
                message.agentId = String(object.agentId);
            if (object.agentName != null)
                message.agentName = String(object.agentName);
            if (object.userName != null)
                message.userName = String(object.userName);
            if (object.data != null)
                message.data = String(object.data);
            if (object.oneShot != null)
                message.oneShot = Boolean(object.oneShot);
            if (object.requestData != null) {
                if (typeof object.requestData !== "object")
                    throw TypeError(".dhlmixer.SpeechData.requestData: object expected");
                message.requestData = $root.dhlmixer.DHLMixerRequestData.fromObject(object.requestData);
            }
            return message;
        };

        /**
         * Creates a plain object from a SpeechData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dhlmixer.SpeechData
         * @static
         * @param {dhlmixer.SpeechData} message SpeechData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SpeechData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.appId = "";
                object.eof = 0;
                if (options.bytes === String)
                    object.rawData = "";
                else {
                    object.rawData = [];
                    if (options.bytes !== Array)
                        object.rawData = $util.newBuffer(object.rawData);
                }
                object.audioType = "";
                object.userId = "";
                object.userInfo = "";
                object.platformType = "";
                object.agentId = "";
                object.agentName = "";
                object.userName = "";
                object.data = "";
                object.oneShot = false;
                object.requestData = null;
            }
            if (message.appId != null && message.hasOwnProperty("appId"))
                object.appId = message.appId;
            if (message.eof != null && message.hasOwnProperty("eof"))
                object.eof = message.eof;
            if (message.rawData != null && message.hasOwnProperty("rawData"))
                object.rawData = options.bytes === String ? $util.base64.encode(message.rawData, 0, message.rawData.length) : options.bytes === Array ? Array.prototype.slice.call(message.rawData) : message.rawData;
            if (message.audioType != null && message.hasOwnProperty("audioType"))
                object.audioType = message.audioType;
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.userInfo != null && message.hasOwnProperty("userInfo"))
                object.userInfo = message.userInfo;
            if (message.platformType != null && message.hasOwnProperty("platformType"))
                object.platformType = message.platformType;
            if (message.agentId != null && message.hasOwnProperty("agentId"))
                object.agentId = message.agentId;
            if (message.agentName != null && message.hasOwnProperty("agentName"))
                object.agentName = message.agentName;
            if (message.userName != null && message.hasOwnProperty("userName"))
                object.userName = message.userName;
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = message.data;
            if (message.oneShot != null && message.hasOwnProperty("oneShot"))
                object.oneShot = message.oneShot;
            if (message.requestData != null && message.hasOwnProperty("requestData"))
                object.requestData = $root.dhlmixer.DHLMixerRequestData.toObject(message.requestData, options);
            return object;
        };

        /**
         * Converts this SpeechData to JSON.
         * @function toJSON
         * @memberof dhlmixer.SpeechData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SpeechData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SpeechData;
    })();

    dhlmixer.SpeechResult = (function() {

        /**
         * Properties of a SpeechResult.
         * @memberof dhlmixer
         * @interface ISpeechResult
         * @property {number|null} [eof] SpeechResult eof
         * @property {string|null} [result] SpeechResult result
         * @property {string|null} [voiceUrl] SpeechResult voiceUrl
         * @property {dhlmixer.IKerfuError|null} [dhlError] SpeechResult dhlError
         * @property {dhlmixer.IKerfuResponse|null} [response] SpeechResult response
         */

        /**
         * Constructs a new SpeechResult.
         * @memberof dhlmixer
         * @classdesc Represents a SpeechResult.
         * @implements ISpeechResult
         * @constructor
         * @param {dhlmixer.ISpeechResult=} [properties] Properties to set
         */
        function SpeechResult(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SpeechResult eof.
         * @member {number} eof
         * @memberof dhlmixer.SpeechResult
         * @instance
         */
        SpeechResult.prototype.eof = 0;

        /**
         * SpeechResult result.
         * @member {string} result
         * @memberof dhlmixer.SpeechResult
         * @instance
         */
        SpeechResult.prototype.result = "";

        /**
         * SpeechResult voiceUrl.
         * @member {string} voiceUrl
         * @memberof dhlmixer.SpeechResult
         * @instance
         */
        SpeechResult.prototype.voiceUrl = "";

        /**
         * SpeechResult dhlError.
         * @member {dhlmixer.IKerfuError|null|undefined} dhlError
         * @memberof dhlmixer.SpeechResult
         * @instance
         */
        SpeechResult.prototype.dhlError = null;

        /**
         * SpeechResult response.
         * @member {dhlmixer.IKerfuResponse|null|undefined} response
         * @memberof dhlmixer.SpeechResult
         * @instance
         */
        SpeechResult.prototype.response = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * SpeechResult dhlResponse.
         * @member {"dhlError"|"response"|undefined} dhlResponse
         * @memberof dhlmixer.SpeechResult
         * @instance
         */
        Object.defineProperty(SpeechResult.prototype, "dhlResponse", {
            get: $util.oneOfGetter($oneOfFields = ["dhlError", "response"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new SpeechResult instance using the specified properties.
         * @function create
         * @memberof dhlmixer.SpeechResult
         * @static
         * @param {dhlmixer.ISpeechResult=} [properties] Properties to set
         * @returns {dhlmixer.SpeechResult} SpeechResult instance
         */
        SpeechResult.create = function create(properties) {
            return new SpeechResult(properties);
        };

        /**
         * Encodes the specified SpeechResult message. Does not implicitly {@link dhlmixer.SpeechResult.verify|verify} messages.
         * @function encode
         * @memberof dhlmixer.SpeechResult
         * @static
         * @param {dhlmixer.ISpeechResult} message SpeechResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SpeechResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.eof != null && message.hasOwnProperty("eof"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.eof);
            if (message.result != null && message.hasOwnProperty("result"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.result);
            if (message.voiceUrl != null && message.hasOwnProperty("voiceUrl"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.voiceUrl);
            if (message.dhlError != null && message.hasOwnProperty("dhlError"))
                $root.dhlmixer.KerfuError.encode(message.dhlError, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.response != null && message.hasOwnProperty("response"))
                $root.dhlmixer.KerfuResponse.encode(message.response, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SpeechResult message, length delimited. Does not implicitly {@link dhlmixer.SpeechResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dhlmixer.SpeechResult
         * @static
         * @param {dhlmixer.ISpeechResult} message SpeechResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SpeechResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SpeechResult message from the specified reader or buffer.
         * @function decode
         * @memberof dhlmixer.SpeechResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dhlmixer.SpeechResult} SpeechResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SpeechResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dhlmixer.SpeechResult();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.eof = reader.int32();
                    break;
                case 2:
                    message.result = reader.string();
                    break;
                case 3:
                    message.voiceUrl = reader.string();
                    break;
                case 4:
                    message.dhlError = $root.dhlmixer.KerfuError.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.response = $root.dhlmixer.KerfuResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SpeechResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dhlmixer.SpeechResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dhlmixer.SpeechResult} SpeechResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SpeechResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SpeechResult message.
         * @function verify
         * @memberof dhlmixer.SpeechResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SpeechResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.eof != null && message.hasOwnProperty("eof"))
                if (!$util.isInteger(message.eof))
                    return "eof: integer expected";
            if (message.result != null && message.hasOwnProperty("result"))
                if (!$util.isString(message.result))
                    return "result: string expected";
            if (message.voiceUrl != null && message.hasOwnProperty("voiceUrl"))
                if (!$util.isString(message.voiceUrl))
                    return "voiceUrl: string expected";
            if (message.dhlError != null && message.hasOwnProperty("dhlError")) {
                properties.dhlResponse = 1;
                {
                    var error = $root.dhlmixer.KerfuError.verify(message.dhlError);
                    if (error)
                        return "dhlError." + error;
                }
            }
            if (message.response != null && message.hasOwnProperty("response")) {
                if (properties.dhlResponse === 1)
                    return "dhlResponse: multiple values";
                properties.dhlResponse = 1;
                {
                    var error = $root.dhlmixer.KerfuResponse.verify(message.response);
                    if (error)
                        return "response." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SpeechResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dhlmixer.SpeechResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dhlmixer.SpeechResult} SpeechResult
         */
        SpeechResult.fromObject = function fromObject(object) {
            if (object instanceof $root.dhlmixer.SpeechResult)
                return object;
            var message = new $root.dhlmixer.SpeechResult();
            if (object.eof != null)
                message.eof = object.eof | 0;
            if (object.result != null)
                message.result = String(object.result);
            if (object.voiceUrl != null)
                message.voiceUrl = String(object.voiceUrl);
            if (object.dhlError != null) {
                if (typeof object.dhlError !== "object")
                    throw TypeError(".dhlmixer.SpeechResult.dhlError: object expected");
                message.dhlError = $root.dhlmixer.KerfuError.fromObject(object.dhlError);
            }
            if (object.response != null) {
                if (typeof object.response !== "object")
                    throw TypeError(".dhlmixer.SpeechResult.response: object expected");
                message.response = $root.dhlmixer.KerfuResponse.fromObject(object.response);
            }
            return message;
        };

        /**
         * Creates a plain object from a SpeechResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dhlmixer.SpeechResult
         * @static
         * @param {dhlmixer.SpeechResult} message SpeechResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SpeechResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.eof = 0;
                object.result = "";
                object.voiceUrl = "";
            }
            if (message.eof != null && message.hasOwnProperty("eof"))
                object.eof = message.eof;
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = message.result;
            if (message.voiceUrl != null && message.hasOwnProperty("voiceUrl"))
                object.voiceUrl = message.voiceUrl;
            if (message.dhlError != null && message.hasOwnProperty("dhlError")) {
                object.dhlError = $root.dhlmixer.KerfuError.toObject(message.dhlError, options);
                if (options.oneofs)
                    object.dhlResponse = "dhlError";
            }
            if (message.response != null && message.hasOwnProperty("response")) {
                object.response = $root.dhlmixer.KerfuResponse.toObject(message.response, options);
                if (options.oneofs)
                    object.dhlResponse = "response";
            }
            return object;
        };

        /**
         * Converts this SpeechResult to JSON.
         * @function toJSON
         * @memberof dhlmixer.SpeechResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SpeechResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SpeechResult;
    })();

    dhlmixer.DHLMixerRequest = (function() {

        /**
         * Properties of a DHLMixerRequest.
         * @memberof dhlmixer
         * @interface IDHLMixerRequest
         * @property {string|null} [reqId] DHLMixerRequest reqId
         * @property {string|null} [appId] DHLMixerRequest appId
         * @property {string|null} [platformType] DHLMixerRequest platformType
         * @property {string|null} [query] DHLMixerRequest query
         * @property {Uint8Array|null} [audioData] DHLMixerRequest audioData
         * @property {string|null} [audioType] DHLMixerRequest audioType
         * @property {string|null} [agentId] DHLMixerRequest agentId
         * @property {string|null} [agentName] DHLMixerRequest agentName
         * @property {string|null} [userId] DHLMixerRequest userId
         * @property {string|null} [userName] DHLMixerRequest userName
         * @property {string|null} [userInfo] DHLMixerRequest userInfo
         * @property {string|null} [pushKey] DHLMixerRequest pushKey
         * @property {Uint8Array|null} [extraData] DHLMixerRequest extraData
         * @property {string|null} [queryId] DHLMixerRequest queryId
         * @property {boolean|null} [forceHandleManually] DHLMixerRequest forceHandleManually
         * @property {dhl.DHLRequestType|null} [dhlRequestType] DHLMixerRequest dhlRequestType
         */

        /**
         * Constructs a new DHLMixerRequest.
         * @memberof dhlmixer
         * @classdesc Represents a DHLMixerRequest.
         * @implements IDHLMixerRequest
         * @constructor
         * @param {dhlmixer.IDHLMixerRequest=} [properties] Properties to set
         */
        function DHLMixerRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DHLMixerRequest reqId.
         * @member {string} reqId
         * @memberof dhlmixer.DHLMixerRequest
         * @instance
         */
        DHLMixerRequest.prototype.reqId = "";

        /**
         * DHLMixerRequest appId.
         * @member {string} appId
         * @memberof dhlmixer.DHLMixerRequest
         * @instance
         */
        DHLMixerRequest.prototype.appId = "";

        /**
         * DHLMixerRequest platformType.
         * @member {string} platformType
         * @memberof dhlmixer.DHLMixerRequest
         * @instance
         */
        DHLMixerRequest.prototype.platformType = "";

        /**
         * DHLMixerRequest query.
         * @member {string} query
         * @memberof dhlmixer.DHLMixerRequest
         * @instance
         */
        DHLMixerRequest.prototype.query = "";

        /**
         * DHLMixerRequest audioData.
         * @member {Uint8Array} audioData
         * @memberof dhlmixer.DHLMixerRequest
         * @instance
         */
        DHLMixerRequest.prototype.audioData = $util.newBuffer([]);

        /**
         * DHLMixerRequest audioType.
         * @member {string} audioType
         * @memberof dhlmixer.DHLMixerRequest
         * @instance
         */
        DHLMixerRequest.prototype.audioType = "";

        /**
         * DHLMixerRequest agentId.
         * @member {string} agentId
         * @memberof dhlmixer.DHLMixerRequest
         * @instance
         */
        DHLMixerRequest.prototype.agentId = "";

        /**
         * DHLMixerRequest agentName.
         * @member {string} agentName
         * @memberof dhlmixer.DHLMixerRequest
         * @instance
         */
        DHLMixerRequest.prototype.agentName = "";

        /**
         * DHLMixerRequest userId.
         * @member {string} userId
         * @memberof dhlmixer.DHLMixerRequest
         * @instance
         */
        DHLMixerRequest.prototype.userId = "";

        /**
         * DHLMixerRequest userName.
         * @member {string} userName
         * @memberof dhlmixer.DHLMixerRequest
         * @instance
         */
        DHLMixerRequest.prototype.userName = "";

        /**
         * DHLMixerRequest userInfo.
         * @member {string} userInfo
         * @memberof dhlmixer.DHLMixerRequest
         * @instance
         */
        DHLMixerRequest.prototype.userInfo = "";

        /**
         * DHLMixerRequest pushKey.
         * @member {string} pushKey
         * @memberof dhlmixer.DHLMixerRequest
         * @instance
         */
        DHLMixerRequest.prototype.pushKey = "";

        /**
         * DHLMixerRequest extraData.
         * @member {Uint8Array} extraData
         * @memberof dhlmixer.DHLMixerRequest
         * @instance
         */
        DHLMixerRequest.prototype.extraData = $util.newBuffer([]);

        /**
         * DHLMixerRequest queryId.
         * @member {string} queryId
         * @memberof dhlmixer.DHLMixerRequest
         * @instance
         */
        DHLMixerRequest.prototype.queryId = "";

        /**
         * DHLMixerRequest forceHandleManually.
         * @member {boolean} forceHandleManually
         * @memberof dhlmixer.DHLMixerRequest
         * @instance
         */
        DHLMixerRequest.prototype.forceHandleManually = false;

        /**
         * DHLMixerRequest dhlRequestType.
         * @member {dhl.DHLRequestType} dhlRequestType
         * @memberof dhlmixer.DHLMixerRequest
         * @instance
         */
        DHLMixerRequest.prototype.dhlRequestType = 0;

        /**
         * Creates a new DHLMixerRequest instance using the specified properties.
         * @function create
         * @memberof dhlmixer.DHLMixerRequest
         * @static
         * @param {dhlmixer.IDHLMixerRequest=} [properties] Properties to set
         * @returns {dhlmixer.DHLMixerRequest} DHLMixerRequest instance
         */
        DHLMixerRequest.create = function create(properties) {
            return new DHLMixerRequest(properties);
        };

        /**
         * Encodes the specified DHLMixerRequest message. Does not implicitly {@link dhlmixer.DHLMixerRequest.verify|verify} messages.
         * @function encode
         * @memberof dhlmixer.DHLMixerRequest
         * @static
         * @param {dhlmixer.IDHLMixerRequest} message DHLMixerRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DHLMixerRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.reqId != null && message.hasOwnProperty("reqId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.reqId);
            if (message.appId != null && message.hasOwnProperty("appId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.appId);
            if (message.platformType != null && message.hasOwnProperty("platformType"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.platformType);
            if (message.query != null && message.hasOwnProperty("query"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.query);
            if (message.audioData != null && message.hasOwnProperty("audioData"))
                writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.audioData);
            if (message.audioType != null && message.hasOwnProperty("audioType"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.audioType);
            if (message.agentId != null && message.hasOwnProperty("agentId"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.agentId);
            if (message.agentName != null && message.hasOwnProperty("agentName"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.agentName);
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.userId);
            if (message.userName != null && message.hasOwnProperty("userName"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.userName);
            if (message.userInfo != null && message.hasOwnProperty("userInfo"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.userInfo);
            if (message.pushKey != null && message.hasOwnProperty("pushKey"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.pushKey);
            if (message.extraData != null && message.hasOwnProperty("extraData"))
                writer.uint32(/* id 13, wireType 2 =*/106).bytes(message.extraData);
            if (message.queryId != null && message.hasOwnProperty("queryId"))
                writer.uint32(/* id 14, wireType 2 =*/114).string(message.queryId);
            if (message.forceHandleManually != null && message.hasOwnProperty("forceHandleManually"))
                writer.uint32(/* id 15, wireType 0 =*/120).bool(message.forceHandleManually);
            if (message.dhlRequestType != null && message.hasOwnProperty("dhlRequestType"))
                writer.uint32(/* id 16, wireType 0 =*/128).int32(message.dhlRequestType);
            return writer;
        };

        /**
         * Encodes the specified DHLMixerRequest message, length delimited. Does not implicitly {@link dhlmixer.DHLMixerRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dhlmixer.DHLMixerRequest
         * @static
         * @param {dhlmixer.IDHLMixerRequest} message DHLMixerRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DHLMixerRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DHLMixerRequest message from the specified reader or buffer.
         * @function decode
         * @memberof dhlmixer.DHLMixerRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dhlmixer.DHLMixerRequest} DHLMixerRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DHLMixerRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dhlmixer.DHLMixerRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.reqId = reader.string();
                    break;
                case 2:
                    message.appId = reader.string();
                    break;
                case 3:
                    message.platformType = reader.string();
                    break;
                case 4:
                    message.query = reader.string();
                    break;
                case 5:
                    message.audioData = reader.bytes();
                    break;
                case 6:
                    message.audioType = reader.string();
                    break;
                case 7:
                    message.agentId = reader.string();
                    break;
                case 8:
                    message.agentName = reader.string();
                    break;
                case 9:
                    message.userId = reader.string();
                    break;
                case 10:
                    message.userName = reader.string();
                    break;
                case 11:
                    message.userInfo = reader.string();
                    break;
                case 12:
                    message.pushKey = reader.string();
                    break;
                case 13:
                    message.extraData = reader.bytes();
                    break;
                case 14:
                    message.queryId = reader.string();
                    break;
                case 15:
                    message.forceHandleManually = reader.bool();
                    break;
                case 16:
                    message.dhlRequestType = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DHLMixerRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dhlmixer.DHLMixerRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dhlmixer.DHLMixerRequest} DHLMixerRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DHLMixerRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DHLMixerRequest message.
         * @function verify
         * @memberof dhlmixer.DHLMixerRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DHLMixerRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.reqId != null && message.hasOwnProperty("reqId"))
                if (!$util.isString(message.reqId))
                    return "reqId: string expected";
            if (message.appId != null && message.hasOwnProperty("appId"))
                if (!$util.isString(message.appId))
                    return "appId: string expected";
            if (message.platformType != null && message.hasOwnProperty("platformType"))
                if (!$util.isString(message.platformType))
                    return "platformType: string expected";
            if (message.query != null && message.hasOwnProperty("query"))
                if (!$util.isString(message.query))
                    return "query: string expected";
            if (message.audioData != null && message.hasOwnProperty("audioData"))
                if (!(message.audioData && typeof message.audioData.length === "number" || $util.isString(message.audioData)))
                    return "audioData: buffer expected";
            if (message.audioType != null && message.hasOwnProperty("audioType"))
                if (!$util.isString(message.audioType))
                    return "audioType: string expected";
            if (message.agentId != null && message.hasOwnProperty("agentId"))
                if (!$util.isString(message.agentId))
                    return "agentId: string expected";
            if (message.agentName != null && message.hasOwnProperty("agentName"))
                if (!$util.isString(message.agentName))
                    return "agentName: string expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isString(message.userId))
                    return "userId: string expected";
            if (message.userName != null && message.hasOwnProperty("userName"))
                if (!$util.isString(message.userName))
                    return "userName: string expected";
            if (message.userInfo != null && message.hasOwnProperty("userInfo"))
                if (!$util.isString(message.userInfo))
                    return "userInfo: string expected";
            if (message.pushKey != null && message.hasOwnProperty("pushKey"))
                if (!$util.isString(message.pushKey))
                    return "pushKey: string expected";
            if (message.extraData != null && message.hasOwnProperty("extraData"))
                if (!(message.extraData && typeof message.extraData.length === "number" || $util.isString(message.extraData)))
                    return "extraData: buffer expected";
            if (message.queryId != null && message.hasOwnProperty("queryId"))
                if (!$util.isString(message.queryId))
                    return "queryId: string expected";
            if (message.forceHandleManually != null && message.hasOwnProperty("forceHandleManually"))
                if (typeof message.forceHandleManually !== "boolean")
                    return "forceHandleManually: boolean expected";
            if (message.dhlRequestType != null && message.hasOwnProperty("dhlRequestType"))
                switch (message.dhlRequestType) {
                default:
                    return "dhlRequestType: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            return null;
        };

        /**
         * Creates a DHLMixerRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dhlmixer.DHLMixerRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dhlmixer.DHLMixerRequest} DHLMixerRequest
         */
        DHLMixerRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.dhlmixer.DHLMixerRequest)
                return object;
            var message = new $root.dhlmixer.DHLMixerRequest();
            if (object.reqId != null)
                message.reqId = String(object.reqId);
            if (object.appId != null)
                message.appId = String(object.appId);
            if (object.platformType != null)
                message.platformType = String(object.platformType);
            if (object.query != null)
                message.query = String(object.query);
            if (object.audioData != null)
                if (typeof object.audioData === "string")
                    $util.base64.decode(object.audioData, message.audioData = $util.newBuffer($util.base64.length(object.audioData)), 0);
                else if (object.audioData.length)
                    message.audioData = object.audioData;
            if (object.audioType != null)
                message.audioType = String(object.audioType);
            if (object.agentId != null)
                message.agentId = String(object.agentId);
            if (object.agentName != null)
                message.agentName = String(object.agentName);
            if (object.userId != null)
                message.userId = String(object.userId);
            if (object.userName != null)
                message.userName = String(object.userName);
            if (object.userInfo != null)
                message.userInfo = String(object.userInfo);
            if (object.pushKey != null)
                message.pushKey = String(object.pushKey);
            if (object.extraData != null)
                if (typeof object.extraData === "string")
                    $util.base64.decode(object.extraData, message.extraData = $util.newBuffer($util.base64.length(object.extraData)), 0);
                else if (object.extraData.length)
                    message.extraData = object.extraData;
            if (object.queryId != null)
                message.queryId = String(object.queryId);
            if (object.forceHandleManually != null)
                message.forceHandleManually = Boolean(object.forceHandleManually);
            switch (object.dhlRequestType) {
            case "Normal":
            case 0:
                message.dhlRequestType = 0;
                break;
            case "AgentList":
            case 1:
                message.dhlRequestType = 1;
                break;
            case "WelcomeMessage":
            case 2:
                message.dhlRequestType = 2;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a DHLMixerRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dhlmixer.DHLMixerRequest
         * @static
         * @param {dhlmixer.DHLMixerRequest} message DHLMixerRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DHLMixerRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.reqId = "";
                object.appId = "";
                object.platformType = "";
                object.query = "";
                if (options.bytes === String)
                    object.audioData = "";
                else {
                    object.audioData = [];
                    if (options.bytes !== Array)
                        object.audioData = $util.newBuffer(object.audioData);
                }
                object.audioType = "";
                object.agentId = "";
                object.agentName = "";
                object.userId = "";
                object.userName = "";
                object.userInfo = "";
                object.pushKey = "";
                if (options.bytes === String)
                    object.extraData = "";
                else {
                    object.extraData = [];
                    if (options.bytes !== Array)
                        object.extraData = $util.newBuffer(object.extraData);
                }
                object.queryId = "";
                object.forceHandleManually = false;
                object.dhlRequestType = options.enums === String ? "Normal" : 0;
            }
            if (message.reqId != null && message.hasOwnProperty("reqId"))
                object.reqId = message.reqId;
            if (message.appId != null && message.hasOwnProperty("appId"))
                object.appId = message.appId;
            if (message.platformType != null && message.hasOwnProperty("platformType"))
                object.platformType = message.platformType;
            if (message.query != null && message.hasOwnProperty("query"))
                object.query = message.query;
            if (message.audioData != null && message.hasOwnProperty("audioData"))
                object.audioData = options.bytes === String ? $util.base64.encode(message.audioData, 0, message.audioData.length) : options.bytes === Array ? Array.prototype.slice.call(message.audioData) : message.audioData;
            if (message.audioType != null && message.hasOwnProperty("audioType"))
                object.audioType = message.audioType;
            if (message.agentId != null && message.hasOwnProperty("agentId"))
                object.agentId = message.agentId;
            if (message.agentName != null && message.hasOwnProperty("agentName"))
                object.agentName = message.agentName;
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.userName != null && message.hasOwnProperty("userName"))
                object.userName = message.userName;
            if (message.userInfo != null && message.hasOwnProperty("userInfo"))
                object.userInfo = message.userInfo;
            if (message.pushKey != null && message.hasOwnProperty("pushKey"))
                object.pushKey = message.pushKey;
            if (message.extraData != null && message.hasOwnProperty("extraData"))
                object.extraData = options.bytes === String ? $util.base64.encode(message.extraData, 0, message.extraData.length) : options.bytes === Array ? Array.prototype.slice.call(message.extraData) : message.extraData;
            if (message.queryId != null && message.hasOwnProperty("queryId"))
                object.queryId = message.queryId;
            if (message.forceHandleManually != null && message.hasOwnProperty("forceHandleManually"))
                object.forceHandleManually = message.forceHandleManually;
            if (message.dhlRequestType != null && message.hasOwnProperty("dhlRequestType"))
                object.dhlRequestType = options.enums === String ? $root.dhl.DHLRequestType[message.dhlRequestType] : message.dhlRequestType;
            return object;
        };

        /**
         * Converts this DHLMixerRequest to JSON.
         * @function toJSON
         * @memberof dhlmixer.DHLMixerRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DHLMixerRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DHLMixerRequest;
    })();

    dhlmixer.DHLMixerError = (function() {

        /**
         * Properties of a DHLMixerError.
         * @memberof dhlmixer
         * @interface IDHLMixerError
         * @property {number|null} [errorCode] DHLMixerError errorCode
         * @property {string|null} [errorMessage] DHLMixerError errorMessage
         */

        /**
         * Constructs a new DHLMixerError.
         * @memberof dhlmixer
         * @classdesc Represents a DHLMixerError.
         * @implements IDHLMixerError
         * @constructor
         * @param {dhlmixer.IDHLMixerError=} [properties] Properties to set
         */
        function DHLMixerError(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DHLMixerError errorCode.
         * @member {number} errorCode
         * @memberof dhlmixer.DHLMixerError
         * @instance
         */
        DHLMixerError.prototype.errorCode = 0;

        /**
         * DHLMixerError errorMessage.
         * @member {string} errorMessage
         * @memberof dhlmixer.DHLMixerError
         * @instance
         */
        DHLMixerError.prototype.errorMessage = "";

        /**
         * Creates a new DHLMixerError instance using the specified properties.
         * @function create
         * @memberof dhlmixer.DHLMixerError
         * @static
         * @param {dhlmixer.IDHLMixerError=} [properties] Properties to set
         * @returns {dhlmixer.DHLMixerError} DHLMixerError instance
         */
        DHLMixerError.create = function create(properties) {
            return new DHLMixerError(properties);
        };

        /**
         * Encodes the specified DHLMixerError message. Does not implicitly {@link dhlmixer.DHLMixerError.verify|verify} messages.
         * @function encode
         * @memberof dhlmixer.DHLMixerError
         * @static
         * @param {dhlmixer.IDHLMixerError} message DHLMixerError message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DHLMixerError.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errorCode != null && message.hasOwnProperty("errorCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errorCode);
            if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.errorMessage);
            return writer;
        };

        /**
         * Encodes the specified DHLMixerError message, length delimited. Does not implicitly {@link dhlmixer.DHLMixerError.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dhlmixer.DHLMixerError
         * @static
         * @param {dhlmixer.IDHLMixerError} message DHLMixerError message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DHLMixerError.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DHLMixerError message from the specified reader or buffer.
         * @function decode
         * @memberof dhlmixer.DHLMixerError
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dhlmixer.DHLMixerError} DHLMixerError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DHLMixerError.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dhlmixer.DHLMixerError();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.errorCode = reader.int32();
                    break;
                case 2:
                    message.errorMessage = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DHLMixerError message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dhlmixer.DHLMixerError
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dhlmixer.DHLMixerError} DHLMixerError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DHLMixerError.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DHLMixerError message.
         * @function verify
         * @memberof dhlmixer.DHLMixerError
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DHLMixerError.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.errorCode != null && message.hasOwnProperty("errorCode"))
                if (!$util.isInteger(message.errorCode))
                    return "errorCode: integer expected";
            if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                if (!$util.isString(message.errorMessage))
                    return "errorMessage: string expected";
            return null;
        };

        /**
         * Creates a DHLMixerError message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dhlmixer.DHLMixerError
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dhlmixer.DHLMixerError} DHLMixerError
         */
        DHLMixerError.fromObject = function fromObject(object) {
            if (object instanceof $root.dhlmixer.DHLMixerError)
                return object;
            var message = new $root.dhlmixer.DHLMixerError();
            if (object.errorCode != null)
                message.errorCode = object.errorCode | 0;
            if (object.errorMessage != null)
                message.errorMessage = String(object.errorMessage);
            return message;
        };

        /**
         * Creates a plain object from a DHLMixerError message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dhlmixer.DHLMixerError
         * @static
         * @param {dhlmixer.DHLMixerError} message DHLMixerError
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DHLMixerError.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.errorCode = 0;
                object.errorMessage = "";
            }
            if (message.errorCode != null && message.hasOwnProperty("errorCode"))
                object.errorCode = message.errorCode;
            if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                object.errorMessage = message.errorMessage;
            return object;
        };

        /**
         * Converts this DHLMixerError to JSON.
         * @function toJSON
         * @memberof dhlmixer.DHLMixerError
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DHLMixerError.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DHLMixerError;
    })();

    dhlmixer.KerfuPollRequest = (function() {

        /**
         * Properties of a KerfuPollRequest.
         * @memberof dhlmixer
         * @interface IKerfuPollRequest
         * @property {string|null} [appId] KerfuPollRequest appId
         * @property {string|null} [platformType] KerfuPollRequest platformType
         * @property {string|null} [userId] KerfuPollRequest userId
         */

        /**
         * Constructs a new KerfuPollRequest.
         * @memberof dhlmixer
         * @classdesc Represents a KerfuPollRequest.
         * @implements IKerfuPollRequest
         * @constructor
         * @param {dhlmixer.IKerfuPollRequest=} [properties] Properties to set
         */
        function KerfuPollRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * KerfuPollRequest appId.
         * @member {string} appId
         * @memberof dhlmixer.KerfuPollRequest
         * @instance
         */
        KerfuPollRequest.prototype.appId = "";

        /**
         * KerfuPollRequest platformType.
         * @member {string} platformType
         * @memberof dhlmixer.KerfuPollRequest
         * @instance
         */
        KerfuPollRequest.prototype.platformType = "";

        /**
         * KerfuPollRequest userId.
         * @member {string} userId
         * @memberof dhlmixer.KerfuPollRequest
         * @instance
         */
        KerfuPollRequest.prototype.userId = "";

        /**
         * Creates a new KerfuPollRequest instance using the specified properties.
         * @function create
         * @memberof dhlmixer.KerfuPollRequest
         * @static
         * @param {dhlmixer.IKerfuPollRequest=} [properties] Properties to set
         * @returns {dhlmixer.KerfuPollRequest} KerfuPollRequest instance
         */
        KerfuPollRequest.create = function create(properties) {
            return new KerfuPollRequest(properties);
        };

        /**
         * Encodes the specified KerfuPollRequest message. Does not implicitly {@link dhlmixer.KerfuPollRequest.verify|verify} messages.
         * @function encode
         * @memberof dhlmixer.KerfuPollRequest
         * @static
         * @param {dhlmixer.IKerfuPollRequest} message KerfuPollRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KerfuPollRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.appId != null && message.hasOwnProperty("appId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.appId);
            if (message.platformType != null && message.hasOwnProperty("platformType"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.platformType);
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.userId);
            return writer;
        };

        /**
         * Encodes the specified KerfuPollRequest message, length delimited. Does not implicitly {@link dhlmixer.KerfuPollRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dhlmixer.KerfuPollRequest
         * @static
         * @param {dhlmixer.IKerfuPollRequest} message KerfuPollRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KerfuPollRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a KerfuPollRequest message from the specified reader or buffer.
         * @function decode
         * @memberof dhlmixer.KerfuPollRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dhlmixer.KerfuPollRequest} KerfuPollRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KerfuPollRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dhlmixer.KerfuPollRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.appId = reader.string();
                    break;
                case 2:
                    message.platformType = reader.string();
                    break;
                case 3:
                    message.userId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a KerfuPollRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dhlmixer.KerfuPollRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dhlmixer.KerfuPollRequest} KerfuPollRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KerfuPollRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a KerfuPollRequest message.
         * @function verify
         * @memberof dhlmixer.KerfuPollRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        KerfuPollRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.appId != null && message.hasOwnProperty("appId"))
                if (!$util.isString(message.appId))
                    return "appId: string expected";
            if (message.platformType != null && message.hasOwnProperty("platformType"))
                if (!$util.isString(message.platformType))
                    return "platformType: string expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isString(message.userId))
                    return "userId: string expected";
            return null;
        };

        /**
         * Creates a KerfuPollRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dhlmixer.KerfuPollRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dhlmixer.KerfuPollRequest} KerfuPollRequest
         */
        KerfuPollRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.dhlmixer.KerfuPollRequest)
                return object;
            var message = new $root.dhlmixer.KerfuPollRequest();
            if (object.appId != null)
                message.appId = String(object.appId);
            if (object.platformType != null)
                message.platformType = String(object.platformType);
            if (object.userId != null)
                message.userId = String(object.userId);
            return message;
        };

        /**
         * Creates a plain object from a KerfuPollRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dhlmixer.KerfuPollRequest
         * @static
         * @param {dhlmixer.KerfuPollRequest} message KerfuPollRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        KerfuPollRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.appId = "";
                object.platformType = "";
                object.userId = "";
            }
            if (message.appId != null && message.hasOwnProperty("appId"))
                object.appId = message.appId;
            if (message.platformType != null && message.hasOwnProperty("platformType"))
                object.platformType = message.platformType;
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            return object;
        };

        /**
         * Converts this KerfuPollRequest to JSON.
         * @function toJSON
         * @memberof dhlmixer.KerfuPollRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        KerfuPollRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return KerfuPollRequest;
    })();

    dhlmixer.DHLMixerResponse = (function() {

        /**
         * Properties of a DHLMixerResponse.
         * @memberof dhlmixer
         * @interface IDHLMixerResponse
         * @property {string|null} [reqId] DHLMixerResponse reqId
         * @property {string|null} [appId] DHLMixerResponse appId
         * @property {string|null} [platformType] DHLMixerResponse platformType
         * @property {string|null} [agentId] DHLMixerResponse agentId
         * @property {string|null} [agentName] DHLMixerResponse agentName
         * @property {string|null} [userId] DHLMixerResponse userId
         * @property {string|null} [userName] DHLMixerResponse userName
         * @property {string|null} [userInfo] DHLMixerResponse userInfo
         * @property {string|null} [pushKey] DHLMixerResponse pushKey
         * @property {string|null} [result] DHLMixerResponse result
         * @property {dhl.IDHLScript|null} [dhlScript] DHLMixerResponse dhlScript
         */

        /**
         * Constructs a new DHLMixerResponse.
         * @memberof dhlmixer
         * @classdesc Represents a DHLMixerResponse.
         * @implements IDHLMixerResponse
         * @constructor
         * @param {dhlmixer.IDHLMixerResponse=} [properties] Properties to set
         */
        function DHLMixerResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DHLMixerResponse reqId.
         * @member {string} reqId
         * @memberof dhlmixer.DHLMixerResponse
         * @instance
         */
        DHLMixerResponse.prototype.reqId = "";

        /**
         * DHLMixerResponse appId.
         * @member {string} appId
         * @memberof dhlmixer.DHLMixerResponse
         * @instance
         */
        DHLMixerResponse.prototype.appId = "";

        /**
         * DHLMixerResponse platformType.
         * @member {string} platformType
         * @memberof dhlmixer.DHLMixerResponse
         * @instance
         */
        DHLMixerResponse.prototype.platformType = "";

        /**
         * DHLMixerResponse agentId.
         * @member {string} agentId
         * @memberof dhlmixer.DHLMixerResponse
         * @instance
         */
        DHLMixerResponse.prototype.agentId = "";

        /**
         * DHLMixerResponse agentName.
         * @member {string} agentName
         * @memberof dhlmixer.DHLMixerResponse
         * @instance
         */
        DHLMixerResponse.prototype.agentName = "";

        /**
         * DHLMixerResponse userId.
         * @member {string} userId
         * @memberof dhlmixer.DHLMixerResponse
         * @instance
         */
        DHLMixerResponse.prototype.userId = "";

        /**
         * DHLMixerResponse userName.
         * @member {string} userName
         * @memberof dhlmixer.DHLMixerResponse
         * @instance
         */
        DHLMixerResponse.prototype.userName = "";

        /**
         * DHLMixerResponse userInfo.
         * @member {string} userInfo
         * @memberof dhlmixer.DHLMixerResponse
         * @instance
         */
        DHLMixerResponse.prototype.userInfo = "";

        /**
         * DHLMixerResponse pushKey.
         * @member {string} pushKey
         * @memberof dhlmixer.DHLMixerResponse
         * @instance
         */
        DHLMixerResponse.prototype.pushKey = "";

        /**
         * DHLMixerResponse result.
         * @member {string} result
         * @memberof dhlmixer.DHLMixerResponse
         * @instance
         */
        DHLMixerResponse.prototype.result = "";

        /**
         * DHLMixerResponse dhlScript.
         * @member {dhl.IDHLScript|null|undefined} dhlScript
         * @memberof dhlmixer.DHLMixerResponse
         * @instance
         */
        DHLMixerResponse.prototype.dhlScript = null;

        /**
         * Creates a new DHLMixerResponse instance using the specified properties.
         * @function create
         * @memberof dhlmixer.DHLMixerResponse
         * @static
         * @param {dhlmixer.IDHLMixerResponse=} [properties] Properties to set
         * @returns {dhlmixer.DHLMixerResponse} DHLMixerResponse instance
         */
        DHLMixerResponse.create = function create(properties) {
            return new DHLMixerResponse(properties);
        };

        /**
         * Encodes the specified DHLMixerResponse message. Does not implicitly {@link dhlmixer.DHLMixerResponse.verify|verify} messages.
         * @function encode
         * @memberof dhlmixer.DHLMixerResponse
         * @static
         * @param {dhlmixer.IDHLMixerResponse} message DHLMixerResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DHLMixerResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.reqId != null && message.hasOwnProperty("reqId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.reqId);
            if (message.appId != null && message.hasOwnProperty("appId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.appId);
            if (message.platformType != null && message.hasOwnProperty("platformType"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.platformType);
            if (message.agentId != null && message.hasOwnProperty("agentId"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.agentId);
            if (message.agentName != null && message.hasOwnProperty("agentName"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.agentName);
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.userId);
            if (message.userName != null && message.hasOwnProperty("userName"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.userName);
            if (message.userInfo != null && message.hasOwnProperty("userInfo"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.userInfo);
            if (message.pushKey != null && message.hasOwnProperty("pushKey"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.pushKey);
            if (message.result != null && message.hasOwnProperty("result"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.result);
            if (message.dhlScript != null && message.hasOwnProperty("dhlScript"))
                $root.dhl.DHLScript.encode(message.dhlScript, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified DHLMixerResponse message, length delimited. Does not implicitly {@link dhlmixer.DHLMixerResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dhlmixer.DHLMixerResponse
         * @static
         * @param {dhlmixer.IDHLMixerResponse} message DHLMixerResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DHLMixerResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DHLMixerResponse message from the specified reader or buffer.
         * @function decode
         * @memberof dhlmixer.DHLMixerResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dhlmixer.DHLMixerResponse} DHLMixerResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DHLMixerResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dhlmixer.DHLMixerResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.reqId = reader.string();
                    break;
                case 2:
                    message.appId = reader.string();
                    break;
                case 3:
                    message.platformType = reader.string();
                    break;
                case 4:
                    message.agentId = reader.string();
                    break;
                case 5:
                    message.agentName = reader.string();
                    break;
                case 6:
                    message.userId = reader.string();
                    break;
                case 7:
                    message.userName = reader.string();
                    break;
                case 8:
                    message.userInfo = reader.string();
                    break;
                case 9:
                    message.pushKey = reader.string();
                    break;
                case 10:
                    message.result = reader.string();
                    break;
                case 11:
                    message.dhlScript = $root.dhl.DHLScript.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DHLMixerResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dhlmixer.DHLMixerResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dhlmixer.DHLMixerResponse} DHLMixerResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DHLMixerResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DHLMixerResponse message.
         * @function verify
         * @memberof dhlmixer.DHLMixerResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DHLMixerResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.reqId != null && message.hasOwnProperty("reqId"))
                if (!$util.isString(message.reqId))
                    return "reqId: string expected";
            if (message.appId != null && message.hasOwnProperty("appId"))
                if (!$util.isString(message.appId))
                    return "appId: string expected";
            if (message.platformType != null && message.hasOwnProperty("platformType"))
                if (!$util.isString(message.platformType))
                    return "platformType: string expected";
            if (message.agentId != null && message.hasOwnProperty("agentId"))
                if (!$util.isString(message.agentId))
                    return "agentId: string expected";
            if (message.agentName != null && message.hasOwnProperty("agentName"))
                if (!$util.isString(message.agentName))
                    return "agentName: string expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isString(message.userId))
                    return "userId: string expected";
            if (message.userName != null && message.hasOwnProperty("userName"))
                if (!$util.isString(message.userName))
                    return "userName: string expected";
            if (message.userInfo != null && message.hasOwnProperty("userInfo"))
                if (!$util.isString(message.userInfo))
                    return "userInfo: string expected";
            if (message.pushKey != null && message.hasOwnProperty("pushKey"))
                if (!$util.isString(message.pushKey))
                    return "pushKey: string expected";
            if (message.result != null && message.hasOwnProperty("result"))
                if (!$util.isString(message.result))
                    return "result: string expected";
            if (message.dhlScript != null && message.hasOwnProperty("dhlScript")) {
                var error = $root.dhl.DHLScript.verify(message.dhlScript);
                if (error)
                    return "dhlScript." + error;
            }
            return null;
        };

        /**
         * Creates a DHLMixerResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dhlmixer.DHLMixerResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dhlmixer.DHLMixerResponse} DHLMixerResponse
         */
        DHLMixerResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.dhlmixer.DHLMixerResponse)
                return object;
            var message = new $root.dhlmixer.DHLMixerResponse();
            if (object.reqId != null)
                message.reqId = String(object.reqId);
            if (object.appId != null)
                message.appId = String(object.appId);
            if (object.platformType != null)
                message.platformType = String(object.platformType);
            if (object.agentId != null)
                message.agentId = String(object.agentId);
            if (object.agentName != null)
                message.agentName = String(object.agentName);
            if (object.userId != null)
                message.userId = String(object.userId);
            if (object.userName != null)
                message.userName = String(object.userName);
            if (object.userInfo != null)
                message.userInfo = String(object.userInfo);
            if (object.pushKey != null)
                message.pushKey = String(object.pushKey);
            if (object.result != null)
                message.result = String(object.result);
            if (object.dhlScript != null) {
                if (typeof object.dhlScript !== "object")
                    throw TypeError(".dhlmixer.DHLMixerResponse.dhlScript: object expected");
                message.dhlScript = $root.dhl.DHLScript.fromObject(object.dhlScript);
            }
            return message;
        };

        /**
         * Creates a plain object from a DHLMixerResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dhlmixer.DHLMixerResponse
         * @static
         * @param {dhlmixer.DHLMixerResponse} message DHLMixerResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DHLMixerResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.reqId = "";
                object.appId = "";
                object.platformType = "";
                object.agentId = "";
                object.agentName = "";
                object.userId = "";
                object.userName = "";
                object.userInfo = "";
                object.pushKey = "";
                object.result = "";
                object.dhlScript = null;
            }
            if (message.reqId != null && message.hasOwnProperty("reqId"))
                object.reqId = message.reqId;
            if (message.appId != null && message.hasOwnProperty("appId"))
                object.appId = message.appId;
            if (message.platformType != null && message.hasOwnProperty("platformType"))
                object.platformType = message.platformType;
            if (message.agentId != null && message.hasOwnProperty("agentId"))
                object.agentId = message.agentId;
            if (message.agentName != null && message.hasOwnProperty("agentName"))
                object.agentName = message.agentName;
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.userName != null && message.hasOwnProperty("userName"))
                object.userName = message.userName;
            if (message.userInfo != null && message.hasOwnProperty("userInfo"))
                object.userInfo = message.userInfo;
            if (message.pushKey != null && message.hasOwnProperty("pushKey"))
                object.pushKey = message.pushKey;
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = message.result;
            if (message.dhlScript != null && message.hasOwnProperty("dhlScript"))
                object.dhlScript = $root.dhl.DHLScript.toObject(message.dhlScript, options);
            return object;
        };

        /**
         * Converts this DHLMixerResponse to JSON.
         * @function toJSON
         * @memberof dhlmixer.DHLMixerResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DHLMixerResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DHLMixerResponse;
    })();

    dhlmixer.SendSMSRequest = (function() {

        /**
         * Properties of a SendSMSRequest.
         * @memberof dhlmixer
         * @interface ISendSMSRequest
         * @property {string|null} [phoneNumber] SendSMSRequest phoneNumber
         * @property {string|null} [nationalCode] SendSMSRequest nationalCode
         */

        /**
         * Constructs a new SendSMSRequest.
         * @memberof dhlmixer
         * @classdesc Represents a SendSMSRequest.
         * @implements ISendSMSRequest
         * @constructor
         * @param {dhlmixer.ISendSMSRequest=} [properties] Properties to set
         */
        function SendSMSRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SendSMSRequest phoneNumber.
         * @member {string} phoneNumber
         * @memberof dhlmixer.SendSMSRequest
         * @instance
         */
        SendSMSRequest.prototype.phoneNumber = "";

        /**
         * SendSMSRequest nationalCode.
         * @member {string} nationalCode
         * @memberof dhlmixer.SendSMSRequest
         * @instance
         */
        SendSMSRequest.prototype.nationalCode = "";

        /**
         * Creates a new SendSMSRequest instance using the specified properties.
         * @function create
         * @memberof dhlmixer.SendSMSRequest
         * @static
         * @param {dhlmixer.ISendSMSRequest=} [properties] Properties to set
         * @returns {dhlmixer.SendSMSRequest} SendSMSRequest instance
         */
        SendSMSRequest.create = function create(properties) {
            return new SendSMSRequest(properties);
        };

        /**
         * Encodes the specified SendSMSRequest message. Does not implicitly {@link dhlmixer.SendSMSRequest.verify|verify} messages.
         * @function encode
         * @memberof dhlmixer.SendSMSRequest
         * @static
         * @param {dhlmixer.ISendSMSRequest} message SendSMSRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendSMSRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.phoneNumber != null && message.hasOwnProperty("phoneNumber"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.phoneNumber);
            if (message.nationalCode != null && message.hasOwnProperty("nationalCode"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.nationalCode);
            return writer;
        };

        /**
         * Encodes the specified SendSMSRequest message, length delimited. Does not implicitly {@link dhlmixer.SendSMSRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dhlmixer.SendSMSRequest
         * @static
         * @param {dhlmixer.ISendSMSRequest} message SendSMSRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendSMSRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendSMSRequest message from the specified reader or buffer.
         * @function decode
         * @memberof dhlmixer.SendSMSRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dhlmixer.SendSMSRequest} SendSMSRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendSMSRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dhlmixer.SendSMSRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.phoneNumber = reader.string();
                    break;
                case 2:
                    message.nationalCode = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SendSMSRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dhlmixer.SendSMSRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dhlmixer.SendSMSRequest} SendSMSRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendSMSRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SendSMSRequest message.
         * @function verify
         * @memberof dhlmixer.SendSMSRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendSMSRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.phoneNumber != null && message.hasOwnProperty("phoneNumber"))
                if (!$util.isString(message.phoneNumber))
                    return "phoneNumber: string expected";
            if (message.nationalCode != null && message.hasOwnProperty("nationalCode"))
                if (!$util.isString(message.nationalCode))
                    return "nationalCode: string expected";
            return null;
        };

        /**
         * Creates a SendSMSRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dhlmixer.SendSMSRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dhlmixer.SendSMSRequest} SendSMSRequest
         */
        SendSMSRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.dhlmixer.SendSMSRequest)
                return object;
            var message = new $root.dhlmixer.SendSMSRequest();
            if (object.phoneNumber != null)
                message.phoneNumber = String(object.phoneNumber);
            if (object.nationalCode != null)
                message.nationalCode = String(object.nationalCode);
            return message;
        };

        /**
         * Creates a plain object from a SendSMSRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dhlmixer.SendSMSRequest
         * @static
         * @param {dhlmixer.SendSMSRequest} message SendSMSRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendSMSRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.phoneNumber = "";
                object.nationalCode = "";
            }
            if (message.phoneNumber != null && message.hasOwnProperty("phoneNumber"))
                object.phoneNumber = message.phoneNumber;
            if (message.nationalCode != null && message.hasOwnProperty("nationalCode"))
                object.nationalCode = message.nationalCode;
            return object;
        };

        /**
         * Converts this SendSMSRequest to JSON.
         * @function toJSON
         * @memberof dhlmixer.SendSMSRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendSMSRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendSMSRequest;
    })();

    dhlmixer.LoginRequest = (function() {

        /**
         * Properties of a LoginRequest.
         * @memberof dhlmixer
         * @interface ILoginRequest
         * @property {string|null} [phoneNumber] LoginRequest phoneNumber
         * @property {string|null} [nationalCode] LoginRequest nationalCode
         * @property {string|null} [verificationCode] LoginRequest verificationCode
         */

        /**
         * Constructs a new LoginRequest.
         * @memberof dhlmixer
         * @classdesc Represents a LoginRequest.
         * @implements ILoginRequest
         * @constructor
         * @param {dhlmixer.ILoginRequest=} [properties] Properties to set
         */
        function LoginRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginRequest phoneNumber.
         * @member {string} phoneNumber
         * @memberof dhlmixer.LoginRequest
         * @instance
         */
        LoginRequest.prototype.phoneNumber = "";

        /**
         * LoginRequest nationalCode.
         * @member {string} nationalCode
         * @memberof dhlmixer.LoginRequest
         * @instance
         */
        LoginRequest.prototype.nationalCode = "";

        /**
         * LoginRequest verificationCode.
         * @member {string} verificationCode
         * @memberof dhlmixer.LoginRequest
         * @instance
         */
        LoginRequest.prototype.verificationCode = "";

        /**
         * Creates a new LoginRequest instance using the specified properties.
         * @function create
         * @memberof dhlmixer.LoginRequest
         * @static
         * @param {dhlmixer.ILoginRequest=} [properties] Properties to set
         * @returns {dhlmixer.LoginRequest} LoginRequest instance
         */
        LoginRequest.create = function create(properties) {
            return new LoginRequest(properties);
        };

        /**
         * Encodes the specified LoginRequest message. Does not implicitly {@link dhlmixer.LoginRequest.verify|verify} messages.
         * @function encode
         * @memberof dhlmixer.LoginRequest
         * @static
         * @param {dhlmixer.ILoginRequest} message LoginRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.phoneNumber != null && message.hasOwnProperty("phoneNumber"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.phoneNumber);
            if (message.nationalCode != null && message.hasOwnProperty("nationalCode"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.nationalCode);
            if (message.verificationCode != null && message.hasOwnProperty("verificationCode"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.verificationCode);
            return writer;
        };

        /**
         * Encodes the specified LoginRequest message, length delimited. Does not implicitly {@link dhlmixer.LoginRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dhlmixer.LoginRequest
         * @static
         * @param {dhlmixer.ILoginRequest} message LoginRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginRequest message from the specified reader or buffer.
         * @function decode
         * @memberof dhlmixer.LoginRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dhlmixer.LoginRequest} LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dhlmixer.LoginRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.phoneNumber = reader.string();
                    break;
                case 2:
                    message.nationalCode = reader.string();
                    break;
                case 3:
                    message.verificationCode = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LoginRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dhlmixer.LoginRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dhlmixer.LoginRequest} LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginRequest message.
         * @function verify
         * @memberof dhlmixer.LoginRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.phoneNumber != null && message.hasOwnProperty("phoneNumber"))
                if (!$util.isString(message.phoneNumber))
                    return "phoneNumber: string expected";
            if (message.nationalCode != null && message.hasOwnProperty("nationalCode"))
                if (!$util.isString(message.nationalCode))
                    return "nationalCode: string expected";
            if (message.verificationCode != null && message.hasOwnProperty("verificationCode"))
                if (!$util.isString(message.verificationCode))
                    return "verificationCode: string expected";
            return null;
        };

        /**
         * Creates a LoginRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dhlmixer.LoginRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dhlmixer.LoginRequest} LoginRequest
         */
        LoginRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.dhlmixer.LoginRequest)
                return object;
            var message = new $root.dhlmixer.LoginRequest();
            if (object.phoneNumber != null)
                message.phoneNumber = String(object.phoneNumber);
            if (object.nationalCode != null)
                message.nationalCode = String(object.nationalCode);
            if (object.verificationCode != null)
                message.verificationCode = String(object.verificationCode);
            return message;
        };

        /**
         * Creates a plain object from a LoginRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dhlmixer.LoginRequest
         * @static
         * @param {dhlmixer.LoginRequest} message LoginRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.phoneNumber = "";
                object.nationalCode = "";
                object.verificationCode = "";
            }
            if (message.phoneNumber != null && message.hasOwnProperty("phoneNumber"))
                object.phoneNumber = message.phoneNumber;
            if (message.nationalCode != null && message.hasOwnProperty("nationalCode"))
                object.nationalCode = message.nationalCode;
            if (message.verificationCode != null && message.hasOwnProperty("verificationCode"))
                object.verificationCode = message.verificationCode;
            return object;
        };

        /**
         * Converts this LoginRequest to JSON.
         * @function toJSON
         * @memberof dhlmixer.LoginRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LoginRequest;
    })();

    dhlmixer.LoginResponse = (function() {

        /**
         * Properties of a LoginResponse.
         * @memberof dhlmixer
         * @interface ILoginResponse
         * @property {number|null} [errorCode] LoginResponse errorCode
         * @property {string|null} [errorMessage] LoginResponse errorMessage
         * @property {string|null} [userId] LoginResponse userId
         */

        /**
         * Constructs a new LoginResponse.
         * @memberof dhlmixer
         * @classdesc Represents a LoginResponse.
         * @implements ILoginResponse
         * @constructor
         * @param {dhlmixer.ILoginResponse=} [properties] Properties to set
         */
        function LoginResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginResponse errorCode.
         * @member {number} errorCode
         * @memberof dhlmixer.LoginResponse
         * @instance
         */
        LoginResponse.prototype.errorCode = 0;

        /**
         * LoginResponse errorMessage.
         * @member {string} errorMessage
         * @memberof dhlmixer.LoginResponse
         * @instance
         */
        LoginResponse.prototype.errorMessage = "";

        /**
         * LoginResponse userId.
         * @member {string} userId
         * @memberof dhlmixer.LoginResponse
         * @instance
         */
        LoginResponse.prototype.userId = "";

        /**
         * Creates a new LoginResponse instance using the specified properties.
         * @function create
         * @memberof dhlmixer.LoginResponse
         * @static
         * @param {dhlmixer.ILoginResponse=} [properties] Properties to set
         * @returns {dhlmixer.LoginResponse} LoginResponse instance
         */
        LoginResponse.create = function create(properties) {
            return new LoginResponse(properties);
        };

        /**
         * Encodes the specified LoginResponse message. Does not implicitly {@link dhlmixer.LoginResponse.verify|verify} messages.
         * @function encode
         * @memberof dhlmixer.LoginResponse
         * @static
         * @param {dhlmixer.ILoginResponse} message LoginResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errorCode != null && message.hasOwnProperty("errorCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errorCode);
            if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.errorMessage);
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.userId);
            return writer;
        };

        /**
         * Encodes the specified LoginResponse message, length delimited. Does not implicitly {@link dhlmixer.LoginResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dhlmixer.LoginResponse
         * @static
         * @param {dhlmixer.ILoginResponse} message LoginResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginResponse message from the specified reader or buffer.
         * @function decode
         * @memberof dhlmixer.LoginResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dhlmixer.LoginResponse} LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dhlmixer.LoginResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.errorCode = reader.int32();
                    break;
                case 2:
                    message.errorMessage = reader.string();
                    break;
                case 3:
                    message.userId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LoginResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dhlmixer.LoginResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dhlmixer.LoginResponse} LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginResponse message.
         * @function verify
         * @memberof dhlmixer.LoginResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.errorCode != null && message.hasOwnProperty("errorCode"))
                if (!$util.isInteger(message.errorCode))
                    return "errorCode: integer expected";
            if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                if (!$util.isString(message.errorMessage))
                    return "errorMessage: string expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isString(message.userId))
                    return "userId: string expected";
            return null;
        };

        /**
         * Creates a LoginResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dhlmixer.LoginResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dhlmixer.LoginResponse} LoginResponse
         */
        LoginResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.dhlmixer.LoginResponse)
                return object;
            var message = new $root.dhlmixer.LoginResponse();
            if (object.errorCode != null)
                message.errorCode = object.errorCode | 0;
            if (object.errorMessage != null)
                message.errorMessage = String(object.errorMessage);
            if (object.userId != null)
                message.userId = String(object.userId);
            return message;
        };

        /**
         * Creates a plain object from a LoginResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dhlmixer.LoginResponse
         * @static
         * @param {dhlmixer.LoginResponse} message LoginResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.errorCode = 0;
                object.errorMessage = "";
                object.userId = "";
            }
            if (message.errorCode != null && message.hasOwnProperty("errorCode"))
                object.errorCode = message.errorCode;
            if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                object.errorMessage = message.errorMessage;
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            return object;
        };

        /**
         * Converts this LoginResponse to JSON.
         * @function toJSON
         * @memberof dhlmixer.LoginResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LoginResponse;
    })();

    dhlmixer.KerfuMessageDep = (function() {

        /**
         * Properties of a KerfuMessageDep.
         * @memberof dhlmixer
         * @interface IKerfuMessageDep
         * @property {number|null} [sessionId] KerfuMessageDep sessionId
         * @property {string|null} [appId] KerfuMessageDep appId
         * @property {string|null} [platformType] KerfuMessageDep platformType
         * @property {string|null} [agentId] KerfuMessageDep agentId
         * @property {string|null} [agentName] KerfuMessageDep agentName
         * @property {string|null} [userId] KerfuMessageDep userId
         * @property {string|null} [userName] KerfuMessageDep userName
         * @property {string|null} [userInfo] KerfuMessageDep userInfo
         * @property {string|null} [pushKey] KerfuMessageDep pushKey
         * @property {string|null} [message] KerfuMessageDep message
         * @property {string|null} [from] KerfuMessageDep from
         * @property {string|null} [customerServicePlatform] KerfuMessageDep customerServicePlatform
         * @property {string|null} [customerServiceSpecialistUid] KerfuMessageDep customerServiceSpecialistUid
         * @property {string|null} [messageType] KerfuMessageDep messageType
         * @property {number|Long|null} [timestamp] KerfuMessageDep timestamp
         * @property {string|null} [reqId] KerfuMessageDep reqId
         * @property {dhl.IDHLScript|null} [dhlScript] KerfuMessageDep dhlScript
         */

        /**
         * Constructs a new KerfuMessageDep.
         * @memberof dhlmixer
         * @classdesc Represents a KerfuMessageDep.
         * @implements IKerfuMessageDep
         * @constructor
         * @param {dhlmixer.IKerfuMessageDep=} [properties] Properties to set
         */
        function KerfuMessageDep(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * KerfuMessageDep sessionId.
         * @member {number} sessionId
         * @memberof dhlmixer.KerfuMessageDep
         * @instance
         */
        KerfuMessageDep.prototype.sessionId = 0;

        /**
         * KerfuMessageDep appId.
         * @member {string} appId
         * @memberof dhlmixer.KerfuMessageDep
         * @instance
         */
        KerfuMessageDep.prototype.appId = "";

        /**
         * KerfuMessageDep platformType.
         * @member {string} platformType
         * @memberof dhlmixer.KerfuMessageDep
         * @instance
         */
        KerfuMessageDep.prototype.platformType = "";

        /**
         * KerfuMessageDep agentId.
         * @member {string} agentId
         * @memberof dhlmixer.KerfuMessageDep
         * @instance
         */
        KerfuMessageDep.prototype.agentId = "";

        /**
         * KerfuMessageDep agentName.
         * @member {string} agentName
         * @memberof dhlmixer.KerfuMessageDep
         * @instance
         */
        KerfuMessageDep.prototype.agentName = "";

        /**
         * KerfuMessageDep userId.
         * @member {string} userId
         * @memberof dhlmixer.KerfuMessageDep
         * @instance
         */
        KerfuMessageDep.prototype.userId = "";

        /**
         * KerfuMessageDep userName.
         * @member {string} userName
         * @memberof dhlmixer.KerfuMessageDep
         * @instance
         */
        KerfuMessageDep.prototype.userName = "";

        /**
         * KerfuMessageDep userInfo.
         * @member {string} userInfo
         * @memberof dhlmixer.KerfuMessageDep
         * @instance
         */
        KerfuMessageDep.prototype.userInfo = "";

        /**
         * KerfuMessageDep pushKey.
         * @member {string} pushKey
         * @memberof dhlmixer.KerfuMessageDep
         * @instance
         */
        KerfuMessageDep.prototype.pushKey = "";

        /**
         * KerfuMessageDep message.
         * @member {string} message
         * @memberof dhlmixer.KerfuMessageDep
         * @instance
         */
        KerfuMessageDep.prototype.message = "";

        /**
         * KerfuMessageDep from.
         * @member {string} from
         * @memberof dhlmixer.KerfuMessageDep
         * @instance
         */
        KerfuMessageDep.prototype.from = "";

        /**
         * KerfuMessageDep customerServicePlatform.
         * @member {string} customerServicePlatform
         * @memberof dhlmixer.KerfuMessageDep
         * @instance
         */
        KerfuMessageDep.prototype.customerServicePlatform = "";

        /**
         * KerfuMessageDep customerServiceSpecialistUid.
         * @member {string} customerServiceSpecialistUid
         * @memberof dhlmixer.KerfuMessageDep
         * @instance
         */
        KerfuMessageDep.prototype.customerServiceSpecialistUid = "";

        /**
         * KerfuMessageDep messageType.
         * @member {string} messageType
         * @memberof dhlmixer.KerfuMessageDep
         * @instance
         */
        KerfuMessageDep.prototype.messageType = "";

        /**
         * KerfuMessageDep timestamp.
         * @member {number|Long} timestamp
         * @memberof dhlmixer.KerfuMessageDep
         * @instance
         */
        KerfuMessageDep.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * KerfuMessageDep reqId.
         * @member {string} reqId
         * @memberof dhlmixer.KerfuMessageDep
         * @instance
         */
        KerfuMessageDep.prototype.reqId = "";

        /**
         * KerfuMessageDep dhlScript.
         * @member {dhl.IDHLScript|null|undefined} dhlScript
         * @memberof dhlmixer.KerfuMessageDep
         * @instance
         */
        KerfuMessageDep.prototype.dhlScript = null;

        /**
         * Creates a new KerfuMessageDep instance using the specified properties.
         * @function create
         * @memberof dhlmixer.KerfuMessageDep
         * @static
         * @param {dhlmixer.IKerfuMessageDep=} [properties] Properties to set
         * @returns {dhlmixer.KerfuMessageDep} KerfuMessageDep instance
         */
        KerfuMessageDep.create = function create(properties) {
            return new KerfuMessageDep(properties);
        };

        /**
         * Encodes the specified KerfuMessageDep message. Does not implicitly {@link dhlmixer.KerfuMessageDep.verify|verify} messages.
         * @function encode
         * @memberof dhlmixer.KerfuMessageDep
         * @static
         * @param {dhlmixer.IKerfuMessageDep} message KerfuMessageDep message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KerfuMessageDep.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sessionId != null && message.hasOwnProperty("sessionId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.sessionId);
            if (message.appId != null && message.hasOwnProperty("appId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.appId);
            if (message.platformType != null && message.hasOwnProperty("platformType"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.platformType);
            if (message.agentId != null && message.hasOwnProperty("agentId"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.agentId);
            if (message.agentName != null && message.hasOwnProperty("agentName"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.agentName);
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.userId);
            if (message.userName != null && message.hasOwnProperty("userName"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.userName);
            if (message.userInfo != null && message.hasOwnProperty("userInfo"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.userInfo);
            if (message.pushKey != null && message.hasOwnProperty("pushKey"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.pushKey);
            if (message.message != null && message.hasOwnProperty("message"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.message);
            if (message.from != null && message.hasOwnProperty("from"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.from);
            if (message.customerServicePlatform != null && message.hasOwnProperty("customerServicePlatform"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.customerServicePlatform);
            if (message.customerServiceSpecialistUid != null && message.hasOwnProperty("customerServiceSpecialistUid"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.customerServiceSpecialistUid);
            if (message.messageType != null && message.hasOwnProperty("messageType"))
                writer.uint32(/* id 14, wireType 2 =*/114).string(message.messageType);
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                writer.uint32(/* id 15, wireType 0 =*/120).int64(message.timestamp);
            if (message.reqId != null && message.hasOwnProperty("reqId"))
                writer.uint32(/* id 16, wireType 2 =*/130).string(message.reqId);
            if (message.dhlScript != null && message.hasOwnProperty("dhlScript"))
                $root.dhl.DHLScript.encode(message.dhlScript, writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified KerfuMessageDep message, length delimited. Does not implicitly {@link dhlmixer.KerfuMessageDep.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dhlmixer.KerfuMessageDep
         * @static
         * @param {dhlmixer.IKerfuMessageDep} message KerfuMessageDep message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KerfuMessageDep.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a KerfuMessageDep message from the specified reader or buffer.
         * @function decode
         * @memberof dhlmixer.KerfuMessageDep
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dhlmixer.KerfuMessageDep} KerfuMessageDep
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KerfuMessageDep.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dhlmixer.KerfuMessageDep();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sessionId = reader.int32();
                    break;
                case 2:
                    message.appId = reader.string();
                    break;
                case 3:
                    message.platformType = reader.string();
                    break;
                case 4:
                    message.agentId = reader.string();
                    break;
                case 5:
                    message.agentName = reader.string();
                    break;
                case 6:
                    message.userId = reader.string();
                    break;
                case 7:
                    message.userName = reader.string();
                    break;
                case 8:
                    message.userInfo = reader.string();
                    break;
                case 9:
                    message.pushKey = reader.string();
                    break;
                case 10:
                    message.message = reader.string();
                    break;
                case 11:
                    message.from = reader.string();
                    break;
                case 12:
                    message.customerServicePlatform = reader.string();
                    break;
                case 13:
                    message.customerServiceSpecialistUid = reader.string();
                    break;
                case 14:
                    message.messageType = reader.string();
                    break;
                case 15:
                    message.timestamp = reader.int64();
                    break;
                case 16:
                    message.reqId = reader.string();
                    break;
                case 17:
                    message.dhlScript = $root.dhl.DHLScript.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a KerfuMessageDep message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dhlmixer.KerfuMessageDep
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dhlmixer.KerfuMessageDep} KerfuMessageDep
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KerfuMessageDep.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a KerfuMessageDep message.
         * @function verify
         * @memberof dhlmixer.KerfuMessageDep
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        KerfuMessageDep.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.sessionId != null && message.hasOwnProperty("sessionId"))
                if (!$util.isInteger(message.sessionId))
                    return "sessionId: integer expected";
            if (message.appId != null && message.hasOwnProperty("appId"))
                if (!$util.isString(message.appId))
                    return "appId: string expected";
            if (message.platformType != null && message.hasOwnProperty("platformType"))
                if (!$util.isString(message.platformType))
                    return "platformType: string expected";
            if (message.agentId != null && message.hasOwnProperty("agentId"))
                if (!$util.isString(message.agentId))
                    return "agentId: string expected";
            if (message.agentName != null && message.hasOwnProperty("agentName"))
                if (!$util.isString(message.agentName))
                    return "agentName: string expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isString(message.userId))
                    return "userId: string expected";
            if (message.userName != null && message.hasOwnProperty("userName"))
                if (!$util.isString(message.userName))
                    return "userName: string expected";
            if (message.userInfo != null && message.hasOwnProperty("userInfo"))
                if (!$util.isString(message.userInfo))
                    return "userInfo: string expected";
            if (message.pushKey != null && message.hasOwnProperty("pushKey"))
                if (!$util.isString(message.pushKey))
                    return "pushKey: string expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            if (message.from != null && message.hasOwnProperty("from"))
                if (!$util.isString(message.from))
                    return "from: string expected";
            if (message.customerServicePlatform != null && message.hasOwnProperty("customerServicePlatform"))
                if (!$util.isString(message.customerServicePlatform))
                    return "customerServicePlatform: string expected";
            if (message.customerServiceSpecialistUid != null && message.hasOwnProperty("customerServiceSpecialistUid"))
                if (!$util.isString(message.customerServiceSpecialistUid))
                    return "customerServiceSpecialistUid: string expected";
            if (message.messageType != null && message.hasOwnProperty("messageType"))
                if (!$util.isString(message.messageType))
                    return "messageType: string expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            if (message.reqId != null && message.hasOwnProperty("reqId"))
                if (!$util.isString(message.reqId))
                    return "reqId: string expected";
            if (message.dhlScript != null && message.hasOwnProperty("dhlScript")) {
                var error = $root.dhl.DHLScript.verify(message.dhlScript);
                if (error)
                    return "dhlScript." + error;
            }
            return null;
        };

        /**
         * Creates a KerfuMessageDep message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dhlmixer.KerfuMessageDep
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dhlmixer.KerfuMessageDep} KerfuMessageDep
         */
        KerfuMessageDep.fromObject = function fromObject(object) {
            if (object instanceof $root.dhlmixer.KerfuMessageDep)
                return object;
            var message = new $root.dhlmixer.KerfuMessageDep();
            if (object.sessionId != null)
                message.sessionId = object.sessionId | 0;
            if (object.appId != null)
                message.appId = String(object.appId);
            if (object.platformType != null)
                message.platformType = String(object.platformType);
            if (object.agentId != null)
                message.agentId = String(object.agentId);
            if (object.agentName != null)
                message.agentName = String(object.agentName);
            if (object.userId != null)
                message.userId = String(object.userId);
            if (object.userName != null)
                message.userName = String(object.userName);
            if (object.userInfo != null)
                message.userInfo = String(object.userInfo);
            if (object.pushKey != null)
                message.pushKey = String(object.pushKey);
            if (object.message != null)
                message.message = String(object.message);
            if (object.from != null)
                message.from = String(object.from);
            if (object.customerServicePlatform != null)
                message.customerServicePlatform = String(object.customerServicePlatform);
            if (object.customerServiceSpecialistUid != null)
                message.customerServiceSpecialistUid = String(object.customerServiceSpecialistUid);
            if (object.messageType != null)
                message.messageType = String(object.messageType);
            if (object.timestamp != null)
                if ($util.Long)
                    (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                else if (typeof object.timestamp === "string")
                    message.timestamp = parseInt(object.timestamp, 10);
                else if (typeof object.timestamp === "number")
                    message.timestamp = object.timestamp;
                else if (typeof object.timestamp === "object")
                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
            if (object.reqId != null)
                message.reqId = String(object.reqId);
            if (object.dhlScript != null) {
                if (typeof object.dhlScript !== "object")
                    throw TypeError(".dhlmixer.KerfuMessageDep.dhlScript: object expected");
                message.dhlScript = $root.dhl.DHLScript.fromObject(object.dhlScript);
            }
            return message;
        };

        /**
         * Creates a plain object from a KerfuMessageDep message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dhlmixer.KerfuMessageDep
         * @static
         * @param {dhlmixer.KerfuMessageDep} message KerfuMessageDep
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        KerfuMessageDep.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.sessionId = 0;
                object.appId = "";
                object.platformType = "";
                object.agentId = "";
                object.agentName = "";
                object.userId = "";
                object.userName = "";
                object.userInfo = "";
                object.pushKey = "";
                object.message = "";
                object.from = "";
                object.customerServicePlatform = "";
                object.customerServiceSpecialistUid = "";
                object.messageType = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestamp = options.longs === String ? "0" : 0;
                object.reqId = "";
                object.dhlScript = null;
            }
            if (message.sessionId != null && message.hasOwnProperty("sessionId"))
                object.sessionId = message.sessionId;
            if (message.appId != null && message.hasOwnProperty("appId"))
                object.appId = message.appId;
            if (message.platformType != null && message.hasOwnProperty("platformType"))
                object.platformType = message.platformType;
            if (message.agentId != null && message.hasOwnProperty("agentId"))
                object.agentId = message.agentId;
            if (message.agentName != null && message.hasOwnProperty("agentName"))
                object.agentName = message.agentName;
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.userName != null && message.hasOwnProperty("userName"))
                object.userName = message.userName;
            if (message.userInfo != null && message.hasOwnProperty("userInfo"))
                object.userInfo = message.userInfo;
            if (message.pushKey != null && message.hasOwnProperty("pushKey"))
                object.pushKey = message.pushKey;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            if (message.from != null && message.hasOwnProperty("from"))
                object.from = message.from;
            if (message.customerServicePlatform != null && message.hasOwnProperty("customerServicePlatform"))
                object.customerServicePlatform = message.customerServicePlatform;
            if (message.customerServiceSpecialistUid != null && message.hasOwnProperty("customerServiceSpecialistUid"))
                object.customerServiceSpecialistUid = message.customerServiceSpecialistUid;
            if (message.messageType != null && message.hasOwnProperty("messageType"))
                object.messageType = message.messageType;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
            if (message.reqId != null && message.hasOwnProperty("reqId"))
                object.reqId = message.reqId;
            if (message.dhlScript != null && message.hasOwnProperty("dhlScript"))
                object.dhlScript = $root.dhl.DHLScript.toObject(message.dhlScript, options);
            return object;
        };

        /**
         * Converts this KerfuMessageDep to JSON.
         * @function toJSON
         * @memberof dhlmixer.KerfuMessageDep
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        KerfuMessageDep.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return KerfuMessageDep;
    })();

    /**
     * KerfuMessageType enum.
     * @name dhlmixer.KerfuMessageType
     * @enum {string}
     * @property {number} Any=0 Any value
     * @property {number} Request=1 Request value
     * @property {number} Response=2 Response value
     * @property {number} PhantomResponse=4 PhantomResponse value
     */
    dhlmixer.KerfuMessageType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Any"] = 0;
        values[valuesById[1] = "Request"] = 1;
        values[valuesById[2] = "Response"] = 2;
        values[valuesById[4] = "PhantomResponse"] = 4;
        return values;
    })();

    /**
     * MessageContentType enum.
     * @name dhlmixer.MessageContentType
     * @enum {string}
     * @property {number} Text=0 Text value
     * @property {number} Image=1 Image value
     * @property {number} Voice=2 Voice value
     * @property {number} Video=3 Video value
     * @property {number} Script=4 Script value
     */
    dhlmixer.MessageContentType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Text"] = 0;
        values[valuesById[1] = "Image"] = 1;
        values[valuesById[2] = "Voice"] = 2;
        values[valuesById[3] = "Video"] = 3;
        values[valuesById[4] = "Script"] = 4;
        return values;
    })();

    /**
     * ResponseType enum.
     * @name dhlmixer.ResponseType
     * @enum {string}
     * @property {number} Auto=0 Auto value
     * @property {number} SemiAuto=1 SemiAuto value
     * @property {number} Manually=2 Manually value
     */
    dhlmixer.ResponseType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Auto"] = 0;
        values[valuesById[1] = "SemiAuto"] = 1;
        values[valuesById[2] = "Manually"] = 2;
        return values;
    })();

    dhlmixer.DHLMixerRequestData = (function() {

        /**
         * Properties of a DHLMixerRequestData.
         * @memberof dhlmixer
         * @interface IDHLMixerRequestData
         * @property {string|null} [reqId] DHLMixerRequestData reqId
         * @property {string|null} [message] DHLMixerRequestData message
         * @property {string|null} [voiceUrl] DHLMixerRequestData voiceUrl
         * @property {string|null} [resourceUrl] DHLMixerRequestData resourceUrl
         * @property {dhlmixer.MessageContentType|null} [messageContentType] DHLMixerRequestData messageContentType
         * @property {boolean|null} [forceHandleManually] DHLMixerRequestData forceHandleManually
         * @property {dhl.DHLRequestType|null} [dhlRequestType] DHLMixerRequestData dhlRequestType
         * @property {Array.<dhl.IDynamicEntity>|null} [dynamicEntities] DHLMixerRequestData dynamicEntities
         * @property {Array.<dhl.IFilledAttribute>|null} [globalAttributes] DHLMixerRequestData globalAttributes
         * @property {string|null} [intentName] DHLMixerRequestData intentName
         * @property {Array.<dhl.IFilledAttribute>|null} [localAttributes] DHLMixerRequestData localAttributes
         */

        /**
         * Constructs a new DHLMixerRequestData.
         * @memberof dhlmixer
         * @classdesc Represents a DHLMixerRequestData.
         * @implements IDHLMixerRequestData
         * @constructor
         * @param {dhlmixer.IDHLMixerRequestData=} [properties] Properties to set
         */
        function DHLMixerRequestData(properties) {
            this.dynamicEntities = [];
            this.globalAttributes = [];
            this.localAttributes = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DHLMixerRequestData reqId.
         * @member {string} reqId
         * @memberof dhlmixer.DHLMixerRequestData
         * @instance
         */
        DHLMixerRequestData.prototype.reqId = "";

        /**
         * DHLMixerRequestData message.
         * @member {string} message
         * @memberof dhlmixer.DHLMixerRequestData
         * @instance
         */
        DHLMixerRequestData.prototype.message = "";

        /**
         * DHLMixerRequestData voiceUrl.
         * @member {string} voiceUrl
         * @memberof dhlmixer.DHLMixerRequestData
         * @instance
         */
        DHLMixerRequestData.prototype.voiceUrl = "";

        /**
         * DHLMixerRequestData resourceUrl.
         * @member {string} resourceUrl
         * @memberof dhlmixer.DHLMixerRequestData
         * @instance
         */
        DHLMixerRequestData.prototype.resourceUrl = "";

        /**
         * DHLMixerRequestData messageContentType.
         * @member {dhlmixer.MessageContentType} messageContentType
         * @memberof dhlmixer.DHLMixerRequestData
         * @instance
         */
        DHLMixerRequestData.prototype.messageContentType = 0;

        /**
         * DHLMixerRequestData forceHandleManually.
         * @member {boolean} forceHandleManually
         * @memberof dhlmixer.DHLMixerRequestData
         * @instance
         */
        DHLMixerRequestData.prototype.forceHandleManually = false;

        /**
         * DHLMixerRequestData dhlRequestType.
         * @member {dhl.DHLRequestType} dhlRequestType
         * @memberof dhlmixer.DHLMixerRequestData
         * @instance
         */
        DHLMixerRequestData.prototype.dhlRequestType = 0;

        /**
         * DHLMixerRequestData dynamicEntities.
         * @member {Array.<dhl.IDynamicEntity>} dynamicEntities
         * @memberof dhlmixer.DHLMixerRequestData
         * @instance
         */
        DHLMixerRequestData.prototype.dynamicEntities = $util.emptyArray;

        /**
         * DHLMixerRequestData globalAttributes.
         * @member {Array.<dhl.IFilledAttribute>} globalAttributes
         * @memberof dhlmixer.DHLMixerRequestData
         * @instance
         */
        DHLMixerRequestData.prototype.globalAttributes = $util.emptyArray;

        /**
         * DHLMixerRequestData intentName.
         * @member {string} intentName
         * @memberof dhlmixer.DHLMixerRequestData
         * @instance
         */
        DHLMixerRequestData.prototype.intentName = "";

        /**
         * DHLMixerRequestData localAttributes.
         * @member {Array.<dhl.IFilledAttribute>} localAttributes
         * @memberof dhlmixer.DHLMixerRequestData
         * @instance
         */
        DHLMixerRequestData.prototype.localAttributes = $util.emptyArray;

        /**
         * Creates a new DHLMixerRequestData instance using the specified properties.
         * @function create
         * @memberof dhlmixer.DHLMixerRequestData
         * @static
         * @param {dhlmixer.IDHLMixerRequestData=} [properties] Properties to set
         * @returns {dhlmixer.DHLMixerRequestData} DHLMixerRequestData instance
         */
        DHLMixerRequestData.create = function create(properties) {
            return new DHLMixerRequestData(properties);
        };

        /**
         * Encodes the specified DHLMixerRequestData message. Does not implicitly {@link dhlmixer.DHLMixerRequestData.verify|verify} messages.
         * @function encode
         * @memberof dhlmixer.DHLMixerRequestData
         * @static
         * @param {dhlmixer.IDHLMixerRequestData} message DHLMixerRequestData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DHLMixerRequestData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.reqId != null && message.hasOwnProperty("reqId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.reqId);
            if (message.message != null && message.hasOwnProperty("message"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
            if (message.voiceUrl != null && message.hasOwnProperty("voiceUrl"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.voiceUrl);
            if (message.resourceUrl != null && message.hasOwnProperty("resourceUrl"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.resourceUrl);
            if (message.messageContentType != null && message.hasOwnProperty("messageContentType"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.messageContentType);
            if (message.forceHandleManually != null && message.hasOwnProperty("forceHandleManually"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.forceHandleManually);
            if (message.dhlRequestType != null && message.hasOwnProperty("dhlRequestType"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.dhlRequestType);
            if (message.dynamicEntities != null && message.dynamicEntities.length)
                for (var i = 0; i < message.dynamicEntities.length; ++i)
                    $root.dhl.DynamicEntity.encode(message.dynamicEntities[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.globalAttributes != null && message.globalAttributes.length)
                for (var i = 0; i < message.globalAttributes.length; ++i)
                    $root.dhl.FilledAttribute.encode(message.globalAttributes[i], writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.intentName != null && message.hasOwnProperty("intentName"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.intentName);
            if (message.localAttributes != null && message.localAttributes.length)
                for (var i = 0; i < message.localAttributes.length; ++i)
                    $root.dhl.FilledAttribute.encode(message.localAttributes[i], writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified DHLMixerRequestData message, length delimited. Does not implicitly {@link dhlmixer.DHLMixerRequestData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dhlmixer.DHLMixerRequestData
         * @static
         * @param {dhlmixer.IDHLMixerRequestData} message DHLMixerRequestData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DHLMixerRequestData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DHLMixerRequestData message from the specified reader or buffer.
         * @function decode
         * @memberof dhlmixer.DHLMixerRequestData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dhlmixer.DHLMixerRequestData} DHLMixerRequestData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DHLMixerRequestData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dhlmixer.DHLMixerRequestData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.reqId = reader.string();
                    break;
                case 2:
                    message.message = reader.string();
                    break;
                case 3:
                    message.voiceUrl = reader.string();
                    break;
                case 4:
                    message.resourceUrl = reader.string();
                    break;
                case 5:
                    message.messageContentType = reader.int32();
                    break;
                case 6:
                    message.forceHandleManually = reader.bool();
                    break;
                case 7:
                    message.dhlRequestType = reader.int32();
                    break;
                case 8:
                    if (!(message.dynamicEntities && message.dynamicEntities.length))
                        message.dynamicEntities = [];
                    message.dynamicEntities.push($root.dhl.DynamicEntity.decode(reader, reader.uint32()));
                    break;
                case 9:
                    if (!(message.globalAttributes && message.globalAttributes.length))
                        message.globalAttributes = [];
                    message.globalAttributes.push($root.dhl.FilledAttribute.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.intentName = reader.string();
                    break;
                case 11:
                    if (!(message.localAttributes && message.localAttributes.length))
                        message.localAttributes = [];
                    message.localAttributes.push($root.dhl.FilledAttribute.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DHLMixerRequestData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dhlmixer.DHLMixerRequestData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dhlmixer.DHLMixerRequestData} DHLMixerRequestData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DHLMixerRequestData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DHLMixerRequestData message.
         * @function verify
         * @memberof dhlmixer.DHLMixerRequestData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DHLMixerRequestData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.reqId != null && message.hasOwnProperty("reqId"))
                if (!$util.isString(message.reqId))
                    return "reqId: string expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            if (message.voiceUrl != null && message.hasOwnProperty("voiceUrl"))
                if (!$util.isString(message.voiceUrl))
                    return "voiceUrl: string expected";
            if (message.resourceUrl != null && message.hasOwnProperty("resourceUrl"))
                if (!$util.isString(message.resourceUrl))
                    return "resourceUrl: string expected";
            if (message.messageContentType != null && message.hasOwnProperty("messageContentType"))
                switch (message.messageContentType) {
                default:
                    return "messageContentType: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            if (message.forceHandleManually != null && message.hasOwnProperty("forceHandleManually"))
                if (typeof message.forceHandleManually !== "boolean")
                    return "forceHandleManually: boolean expected";
            if (message.dhlRequestType != null && message.hasOwnProperty("dhlRequestType"))
                switch (message.dhlRequestType) {
                default:
                    return "dhlRequestType: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.dynamicEntities != null && message.hasOwnProperty("dynamicEntities")) {
                if (!Array.isArray(message.dynamicEntities))
                    return "dynamicEntities: array expected";
                for (var i = 0; i < message.dynamicEntities.length; ++i) {
                    var error = $root.dhl.DynamicEntity.verify(message.dynamicEntities[i]);
                    if (error)
                        return "dynamicEntities." + error;
                }
            }
            if (message.globalAttributes != null && message.hasOwnProperty("globalAttributes")) {
                if (!Array.isArray(message.globalAttributes))
                    return "globalAttributes: array expected";
                for (var i = 0; i < message.globalAttributes.length; ++i) {
                    var error = $root.dhl.FilledAttribute.verify(message.globalAttributes[i]);
                    if (error)
                        return "globalAttributes." + error;
                }
            }
            if (message.intentName != null && message.hasOwnProperty("intentName"))
                if (!$util.isString(message.intentName))
                    return "intentName: string expected";
            if (message.localAttributes != null && message.hasOwnProperty("localAttributes")) {
                if (!Array.isArray(message.localAttributes))
                    return "localAttributes: array expected";
                for (var i = 0; i < message.localAttributes.length; ++i) {
                    var error = $root.dhl.FilledAttribute.verify(message.localAttributes[i]);
                    if (error)
                        return "localAttributes." + error;
                }
            }
            return null;
        };

        /**
         * Creates a DHLMixerRequestData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dhlmixer.DHLMixerRequestData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dhlmixer.DHLMixerRequestData} DHLMixerRequestData
         */
        DHLMixerRequestData.fromObject = function fromObject(object) {
            if (object instanceof $root.dhlmixer.DHLMixerRequestData)
                return object;
            var message = new $root.dhlmixer.DHLMixerRequestData();
            if (object.reqId != null)
                message.reqId = String(object.reqId);
            if (object.message != null)
                message.message = String(object.message);
            if (object.voiceUrl != null)
                message.voiceUrl = String(object.voiceUrl);
            if (object.resourceUrl != null)
                message.resourceUrl = String(object.resourceUrl);
            switch (object.messageContentType) {
            case "Text":
            case 0:
                message.messageContentType = 0;
                break;
            case "Image":
            case 1:
                message.messageContentType = 1;
                break;
            case "Voice":
            case 2:
                message.messageContentType = 2;
                break;
            case "Video":
            case 3:
                message.messageContentType = 3;
                break;
            case "Script":
            case 4:
                message.messageContentType = 4;
                break;
            }
            if (object.forceHandleManually != null)
                message.forceHandleManually = Boolean(object.forceHandleManually);
            switch (object.dhlRequestType) {
            case "Normal":
            case 0:
                message.dhlRequestType = 0;
                break;
            case "AgentList":
            case 1:
                message.dhlRequestType = 1;
                break;
            case "WelcomeMessage":
            case 2:
                message.dhlRequestType = 2;
                break;
            }
            if (object.dynamicEntities) {
                if (!Array.isArray(object.dynamicEntities))
                    throw TypeError(".dhlmixer.DHLMixerRequestData.dynamicEntities: array expected");
                message.dynamicEntities = [];
                for (var i = 0; i < object.dynamicEntities.length; ++i) {
                    if (typeof object.dynamicEntities[i] !== "object")
                        throw TypeError(".dhlmixer.DHLMixerRequestData.dynamicEntities: object expected");
                    message.dynamicEntities[i] = $root.dhl.DynamicEntity.fromObject(object.dynamicEntities[i]);
                }
            }
            if (object.globalAttributes) {
                if (!Array.isArray(object.globalAttributes))
                    throw TypeError(".dhlmixer.DHLMixerRequestData.globalAttributes: array expected");
                message.globalAttributes = [];
                for (var i = 0; i < object.globalAttributes.length; ++i) {
                    if (typeof object.globalAttributes[i] !== "object")
                        throw TypeError(".dhlmixer.DHLMixerRequestData.globalAttributes: object expected");
                    message.globalAttributes[i] = $root.dhl.FilledAttribute.fromObject(object.globalAttributes[i]);
                }
            }
            if (object.intentName != null)
                message.intentName = String(object.intentName);
            if (object.localAttributes) {
                if (!Array.isArray(object.localAttributes))
                    throw TypeError(".dhlmixer.DHLMixerRequestData.localAttributes: array expected");
                message.localAttributes = [];
                for (var i = 0; i < object.localAttributes.length; ++i) {
                    if (typeof object.localAttributes[i] !== "object")
                        throw TypeError(".dhlmixer.DHLMixerRequestData.localAttributes: object expected");
                    message.localAttributes[i] = $root.dhl.FilledAttribute.fromObject(object.localAttributes[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a DHLMixerRequestData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dhlmixer.DHLMixerRequestData
         * @static
         * @param {dhlmixer.DHLMixerRequestData} message DHLMixerRequestData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DHLMixerRequestData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.dynamicEntities = [];
                object.globalAttributes = [];
                object.localAttributes = [];
            }
            if (options.defaults) {
                object.reqId = "";
                object.message = "";
                object.voiceUrl = "";
                object.resourceUrl = "";
                object.messageContentType = options.enums === String ? "Text" : 0;
                object.forceHandleManually = false;
                object.dhlRequestType = options.enums === String ? "Normal" : 0;
                object.intentName = "";
            }
            if (message.reqId != null && message.hasOwnProperty("reqId"))
                object.reqId = message.reqId;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            if (message.voiceUrl != null && message.hasOwnProperty("voiceUrl"))
                object.voiceUrl = message.voiceUrl;
            if (message.resourceUrl != null && message.hasOwnProperty("resourceUrl"))
                object.resourceUrl = message.resourceUrl;
            if (message.messageContentType != null && message.hasOwnProperty("messageContentType"))
                object.messageContentType = options.enums === String ? $root.dhlmixer.MessageContentType[message.messageContentType] : message.messageContentType;
            if (message.forceHandleManually != null && message.hasOwnProperty("forceHandleManually"))
                object.forceHandleManually = message.forceHandleManually;
            if (message.dhlRequestType != null && message.hasOwnProperty("dhlRequestType"))
                object.dhlRequestType = options.enums === String ? $root.dhl.DHLRequestType[message.dhlRequestType] : message.dhlRequestType;
            if (message.dynamicEntities && message.dynamicEntities.length) {
                object.dynamicEntities = [];
                for (var j = 0; j < message.dynamicEntities.length; ++j)
                    object.dynamicEntities[j] = $root.dhl.DynamicEntity.toObject(message.dynamicEntities[j], options);
            }
            if (message.globalAttributes && message.globalAttributes.length) {
                object.globalAttributes = [];
                for (var j = 0; j < message.globalAttributes.length; ++j)
                    object.globalAttributes[j] = $root.dhl.FilledAttribute.toObject(message.globalAttributes[j], options);
            }
            if (message.intentName != null && message.hasOwnProperty("intentName"))
                object.intentName = message.intentName;
            if (message.localAttributes && message.localAttributes.length) {
                object.localAttributes = [];
                for (var j = 0; j < message.localAttributes.length; ++j)
                    object.localAttributes[j] = $root.dhl.FilledAttribute.toObject(message.localAttributes[j], options);
            }
            return object;
        };

        /**
         * Converts this DHLMixerRequestData to JSON.
         * @function toJSON
         * @memberof dhlmixer.DHLMixerRequestData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DHLMixerRequestData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DHLMixerRequestData;
    })();

    dhlmixer.DHLMixerResponseData = (function() {

        /**
         * Properties of a DHLMixerResponseData.
         * @memberof dhlmixer
         * @interface IDHLMixerResponseData
         * @property {string|null} [reqId] DHLMixerResponseData reqId
         * @property {string|null} [message] DHLMixerResponseData message
         * @property {string|null} [resourceUrl] DHLMixerResponseData resourceUrl
         * @property {dhlmixer.MessageContentType|null} [messageContentType] DHLMixerResponseData messageContentType
         * @property {dhlmixer.ResponseType|null} [responseType] DHLMixerResponseData responseType
         * @property {dhl.IDHLScript|null} [dhlScript] DHLMixerResponseData dhlScript
         * @property {string|null} [supportPlatform] DHLMixerResponseData supportPlatform
         * @property {string|null} [supportApp] DHLMixerResponseData supportApp
         * @property {string|null} [supportUid] DHLMixerResponseData supportUid
         */

        /**
         * Constructs a new DHLMixerResponseData.
         * @memberof dhlmixer
         * @classdesc Represents a DHLMixerResponseData.
         * @implements IDHLMixerResponseData
         * @constructor
         * @param {dhlmixer.IDHLMixerResponseData=} [properties] Properties to set
         */
        function DHLMixerResponseData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DHLMixerResponseData reqId.
         * @member {string} reqId
         * @memberof dhlmixer.DHLMixerResponseData
         * @instance
         */
        DHLMixerResponseData.prototype.reqId = "";

        /**
         * DHLMixerResponseData message.
         * @member {string} message
         * @memberof dhlmixer.DHLMixerResponseData
         * @instance
         */
        DHLMixerResponseData.prototype.message = "";

        /**
         * DHLMixerResponseData resourceUrl.
         * @member {string} resourceUrl
         * @memberof dhlmixer.DHLMixerResponseData
         * @instance
         */
        DHLMixerResponseData.prototype.resourceUrl = "";

        /**
         * DHLMixerResponseData messageContentType.
         * @member {dhlmixer.MessageContentType} messageContentType
         * @memberof dhlmixer.DHLMixerResponseData
         * @instance
         */
        DHLMixerResponseData.prototype.messageContentType = 0;

        /**
         * DHLMixerResponseData responseType.
         * @member {dhlmixer.ResponseType} responseType
         * @memberof dhlmixer.DHLMixerResponseData
         * @instance
         */
        DHLMixerResponseData.prototype.responseType = 0;

        /**
         * DHLMixerResponseData dhlScript.
         * @member {dhl.IDHLScript|null|undefined} dhlScript
         * @memberof dhlmixer.DHLMixerResponseData
         * @instance
         */
        DHLMixerResponseData.prototype.dhlScript = null;

        /**
         * DHLMixerResponseData supportPlatform.
         * @member {string} supportPlatform
         * @memberof dhlmixer.DHLMixerResponseData
         * @instance
         */
        DHLMixerResponseData.prototype.supportPlatform = "";

        /**
         * DHLMixerResponseData supportApp.
         * @member {string} supportApp
         * @memberof dhlmixer.DHLMixerResponseData
         * @instance
         */
        DHLMixerResponseData.prototype.supportApp = "";

        /**
         * DHLMixerResponseData supportUid.
         * @member {string} supportUid
         * @memberof dhlmixer.DHLMixerResponseData
         * @instance
         */
        DHLMixerResponseData.prototype.supportUid = "";

        /**
         * Creates a new DHLMixerResponseData instance using the specified properties.
         * @function create
         * @memberof dhlmixer.DHLMixerResponseData
         * @static
         * @param {dhlmixer.IDHLMixerResponseData=} [properties] Properties to set
         * @returns {dhlmixer.DHLMixerResponseData} DHLMixerResponseData instance
         */
        DHLMixerResponseData.create = function create(properties) {
            return new DHLMixerResponseData(properties);
        };

        /**
         * Encodes the specified DHLMixerResponseData message. Does not implicitly {@link dhlmixer.DHLMixerResponseData.verify|verify} messages.
         * @function encode
         * @memberof dhlmixer.DHLMixerResponseData
         * @static
         * @param {dhlmixer.IDHLMixerResponseData} message DHLMixerResponseData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DHLMixerResponseData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.reqId != null && message.hasOwnProperty("reqId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.reqId);
            if (message.message != null && message.hasOwnProperty("message"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
            if (message.resourceUrl != null && message.hasOwnProperty("resourceUrl"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.resourceUrl);
            if (message.messageContentType != null && message.hasOwnProperty("messageContentType"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.messageContentType);
            if (message.responseType != null && message.hasOwnProperty("responseType"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.responseType);
            if (message.dhlScript != null && message.hasOwnProperty("dhlScript"))
                $root.dhl.DHLScript.encode(message.dhlScript, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.supportPlatform != null && message.hasOwnProperty("supportPlatform"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.supportPlatform);
            if (message.supportApp != null && message.hasOwnProperty("supportApp"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.supportApp);
            if (message.supportUid != null && message.hasOwnProperty("supportUid"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.supportUid);
            return writer;
        };

        /**
         * Encodes the specified DHLMixerResponseData message, length delimited. Does not implicitly {@link dhlmixer.DHLMixerResponseData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dhlmixer.DHLMixerResponseData
         * @static
         * @param {dhlmixer.IDHLMixerResponseData} message DHLMixerResponseData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DHLMixerResponseData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DHLMixerResponseData message from the specified reader or buffer.
         * @function decode
         * @memberof dhlmixer.DHLMixerResponseData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dhlmixer.DHLMixerResponseData} DHLMixerResponseData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DHLMixerResponseData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dhlmixer.DHLMixerResponseData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.reqId = reader.string();
                    break;
                case 2:
                    message.message = reader.string();
                    break;
                case 3:
                    message.resourceUrl = reader.string();
                    break;
                case 4:
                    message.messageContentType = reader.int32();
                    break;
                case 5:
                    message.responseType = reader.int32();
                    break;
                case 6:
                    message.dhlScript = $root.dhl.DHLScript.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.supportPlatform = reader.string();
                    break;
                case 8:
                    message.supportApp = reader.string();
                    break;
                case 9:
                    message.supportUid = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DHLMixerResponseData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dhlmixer.DHLMixerResponseData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dhlmixer.DHLMixerResponseData} DHLMixerResponseData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DHLMixerResponseData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DHLMixerResponseData message.
         * @function verify
         * @memberof dhlmixer.DHLMixerResponseData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DHLMixerResponseData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.reqId != null && message.hasOwnProperty("reqId"))
                if (!$util.isString(message.reqId))
                    return "reqId: string expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            if (message.resourceUrl != null && message.hasOwnProperty("resourceUrl"))
                if (!$util.isString(message.resourceUrl))
                    return "resourceUrl: string expected";
            if (message.messageContentType != null && message.hasOwnProperty("messageContentType"))
                switch (message.messageContentType) {
                default:
                    return "messageContentType: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            if (message.responseType != null && message.hasOwnProperty("responseType"))
                switch (message.responseType) {
                default:
                    return "responseType: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.dhlScript != null && message.hasOwnProperty("dhlScript")) {
                var error = $root.dhl.DHLScript.verify(message.dhlScript);
                if (error)
                    return "dhlScript." + error;
            }
            if (message.supportPlatform != null && message.hasOwnProperty("supportPlatform"))
                if (!$util.isString(message.supportPlatform))
                    return "supportPlatform: string expected";
            if (message.supportApp != null && message.hasOwnProperty("supportApp"))
                if (!$util.isString(message.supportApp))
                    return "supportApp: string expected";
            if (message.supportUid != null && message.hasOwnProperty("supportUid"))
                if (!$util.isString(message.supportUid))
                    return "supportUid: string expected";
            return null;
        };

        /**
         * Creates a DHLMixerResponseData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dhlmixer.DHLMixerResponseData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dhlmixer.DHLMixerResponseData} DHLMixerResponseData
         */
        DHLMixerResponseData.fromObject = function fromObject(object) {
            if (object instanceof $root.dhlmixer.DHLMixerResponseData)
                return object;
            var message = new $root.dhlmixer.DHLMixerResponseData();
            if (object.reqId != null)
                message.reqId = String(object.reqId);
            if (object.message != null)
                message.message = String(object.message);
            if (object.resourceUrl != null)
                message.resourceUrl = String(object.resourceUrl);
            switch (object.messageContentType) {
            case "Text":
            case 0:
                message.messageContentType = 0;
                break;
            case "Image":
            case 1:
                message.messageContentType = 1;
                break;
            case "Voice":
            case 2:
                message.messageContentType = 2;
                break;
            case "Video":
            case 3:
                message.messageContentType = 3;
                break;
            case "Script":
            case 4:
                message.messageContentType = 4;
                break;
            }
            switch (object.responseType) {
            case "Auto":
            case 0:
                message.responseType = 0;
                break;
            case "SemiAuto":
            case 1:
                message.responseType = 1;
                break;
            case "Manually":
            case 2:
                message.responseType = 2;
                break;
            }
            if (object.dhlScript != null) {
                if (typeof object.dhlScript !== "object")
                    throw TypeError(".dhlmixer.DHLMixerResponseData.dhlScript: object expected");
                message.dhlScript = $root.dhl.DHLScript.fromObject(object.dhlScript);
            }
            if (object.supportPlatform != null)
                message.supportPlatform = String(object.supportPlatform);
            if (object.supportApp != null)
                message.supportApp = String(object.supportApp);
            if (object.supportUid != null)
                message.supportUid = String(object.supportUid);
            return message;
        };

        /**
         * Creates a plain object from a DHLMixerResponseData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dhlmixer.DHLMixerResponseData
         * @static
         * @param {dhlmixer.DHLMixerResponseData} message DHLMixerResponseData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DHLMixerResponseData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.reqId = "";
                object.message = "";
                object.resourceUrl = "";
                object.messageContentType = options.enums === String ? "Text" : 0;
                object.responseType = options.enums === String ? "Auto" : 0;
                object.dhlScript = null;
                object.supportPlatform = "";
                object.supportApp = "";
                object.supportUid = "";
            }
            if (message.reqId != null && message.hasOwnProperty("reqId"))
                object.reqId = message.reqId;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            if (message.resourceUrl != null && message.hasOwnProperty("resourceUrl"))
                object.resourceUrl = message.resourceUrl;
            if (message.messageContentType != null && message.hasOwnProperty("messageContentType"))
                object.messageContentType = options.enums === String ? $root.dhlmixer.MessageContentType[message.messageContentType] : message.messageContentType;
            if (message.responseType != null && message.hasOwnProperty("responseType"))
                object.responseType = options.enums === String ? $root.dhlmixer.ResponseType[message.responseType] : message.responseType;
            if (message.dhlScript != null && message.hasOwnProperty("dhlScript"))
                object.dhlScript = $root.dhl.DHLScript.toObject(message.dhlScript, options);
            if (message.supportPlatform != null && message.hasOwnProperty("supportPlatform"))
                object.supportPlatform = message.supportPlatform;
            if (message.supportApp != null && message.hasOwnProperty("supportApp"))
                object.supportApp = message.supportApp;
            if (message.supportUid != null && message.hasOwnProperty("supportUid"))
                object.supportUid = message.supportUid;
            return object;
        };

        /**
         * Converts this DHLMixerResponseData to JSON.
         * @function toJSON
         * @memberof dhlmixer.DHLMixerResponseData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DHLMixerResponseData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DHLMixerResponseData;
    })();

    dhlmixer.KerfuMessage = (function() {

        /**
         * Properties of a KerfuMessage.
         * @memberof dhlmixer
         * @interface IKerfuMessage
         * @property {number|Long|null} [messageId] KerfuMessage messageId
         * @property {number|null} [sessionId] KerfuMessage sessionId
         * @property {dhlmixer.KerfuMessageType|null} [messageType] KerfuMessage messageType
         * @property {string|null} [platformType] KerfuMessage platformType
         * @property {string|null} [appId] KerfuMessage appId
         * @property {string|null} [userId] KerfuMessage userId
         * @property {string|null} [userName] KerfuMessage userName
         * @property {string|null} [agentId] KerfuMessage agentId
         * @property {string|null} [agentName] KerfuMessage agentName
         * @property {number|Long|null} [timestamp] KerfuMessage timestamp
         * @property {dhlmixer.IDHLMixerRequestData|null} [request] KerfuMessage request
         * @property {dhlmixer.IDHLMixerResponseData|null} [response] KerfuMessage response
         */

        /**
         * Constructs a new KerfuMessage.
         * @memberof dhlmixer
         * @classdesc Represents a KerfuMessage.
         * @implements IKerfuMessage
         * @constructor
         * @param {dhlmixer.IKerfuMessage=} [properties] Properties to set
         */
        function KerfuMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * KerfuMessage messageId.
         * @member {number|Long} messageId
         * @memberof dhlmixer.KerfuMessage
         * @instance
         */
        KerfuMessage.prototype.messageId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * KerfuMessage sessionId.
         * @member {number} sessionId
         * @memberof dhlmixer.KerfuMessage
         * @instance
         */
        KerfuMessage.prototype.sessionId = 0;

        /**
         * KerfuMessage messageType.
         * @member {dhlmixer.KerfuMessageType} messageType
         * @memberof dhlmixer.KerfuMessage
         * @instance
         */
        KerfuMessage.prototype.messageType = 0;

        /**
         * KerfuMessage platformType.
         * @member {string} platformType
         * @memberof dhlmixer.KerfuMessage
         * @instance
         */
        KerfuMessage.prototype.platformType = "";

        /**
         * KerfuMessage appId.
         * @member {string} appId
         * @memberof dhlmixer.KerfuMessage
         * @instance
         */
        KerfuMessage.prototype.appId = "";

        /**
         * KerfuMessage userId.
         * @member {string} userId
         * @memberof dhlmixer.KerfuMessage
         * @instance
         */
        KerfuMessage.prototype.userId = "";

        /**
         * KerfuMessage userName.
         * @member {string} userName
         * @memberof dhlmixer.KerfuMessage
         * @instance
         */
        KerfuMessage.prototype.userName = "";

        /**
         * KerfuMessage agentId.
         * @member {string} agentId
         * @memberof dhlmixer.KerfuMessage
         * @instance
         */
        KerfuMessage.prototype.agentId = "";

        /**
         * KerfuMessage agentName.
         * @member {string} agentName
         * @memberof dhlmixer.KerfuMessage
         * @instance
         */
        KerfuMessage.prototype.agentName = "";

        /**
         * KerfuMessage timestamp.
         * @member {number|Long} timestamp
         * @memberof dhlmixer.KerfuMessage
         * @instance
         */
        KerfuMessage.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * KerfuMessage request.
         * @member {dhlmixer.IDHLMixerRequestData|null|undefined} request
         * @memberof dhlmixer.KerfuMessage
         * @instance
         */
        KerfuMessage.prototype.request = null;

        /**
         * KerfuMessage response.
         * @member {dhlmixer.IDHLMixerResponseData|null|undefined} response
         * @memberof dhlmixer.KerfuMessage
         * @instance
         */
        KerfuMessage.prototype.response = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * KerfuMessage content.
         * @member {"request"|"response"|undefined} content
         * @memberof dhlmixer.KerfuMessage
         * @instance
         */
        Object.defineProperty(KerfuMessage.prototype, "content", {
            get: $util.oneOfGetter($oneOfFields = ["request", "response"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new KerfuMessage instance using the specified properties.
         * @function create
         * @memberof dhlmixer.KerfuMessage
         * @static
         * @param {dhlmixer.IKerfuMessage=} [properties] Properties to set
         * @returns {dhlmixer.KerfuMessage} KerfuMessage instance
         */
        KerfuMessage.create = function create(properties) {
            return new KerfuMessage(properties);
        };

        /**
         * Encodes the specified KerfuMessage message. Does not implicitly {@link dhlmixer.KerfuMessage.verify|verify} messages.
         * @function encode
         * @memberof dhlmixer.KerfuMessage
         * @static
         * @param {dhlmixer.IKerfuMessage} message KerfuMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KerfuMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.messageId != null && message.hasOwnProperty("messageId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.messageId);
            if (message.sessionId != null && message.hasOwnProperty("sessionId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.sessionId);
            if (message.messageType != null && message.hasOwnProperty("messageType"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.messageType);
            if (message.platformType != null && message.hasOwnProperty("platformType"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.platformType);
            if (message.appId != null && message.hasOwnProperty("appId"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.appId);
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.userId);
            if (message.userName != null && message.hasOwnProperty("userName"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.userName);
            if (message.agentId != null && message.hasOwnProperty("agentId"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.agentId);
            if (message.agentName != null && message.hasOwnProperty("agentName"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.agentName);
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                writer.uint32(/* id 10, wireType 0 =*/80).int64(message.timestamp);
            if (message.request != null && message.hasOwnProperty("request"))
                $root.dhlmixer.DHLMixerRequestData.encode(message.request, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            if (message.response != null && message.hasOwnProperty("response"))
                $root.dhlmixer.DHLMixerResponseData.encode(message.response, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified KerfuMessage message, length delimited. Does not implicitly {@link dhlmixer.KerfuMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dhlmixer.KerfuMessage
         * @static
         * @param {dhlmixer.IKerfuMessage} message KerfuMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KerfuMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a KerfuMessage message from the specified reader or buffer.
         * @function decode
         * @memberof dhlmixer.KerfuMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dhlmixer.KerfuMessage} KerfuMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KerfuMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dhlmixer.KerfuMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.messageId = reader.int64();
                    break;
                case 2:
                    message.sessionId = reader.int32();
                    break;
                case 3:
                    message.messageType = reader.int32();
                    break;
                case 4:
                    message.platformType = reader.string();
                    break;
                case 5:
                    message.appId = reader.string();
                    break;
                case 6:
                    message.userId = reader.string();
                    break;
                case 7:
                    message.userName = reader.string();
                    break;
                case 8:
                    message.agentId = reader.string();
                    break;
                case 9:
                    message.agentName = reader.string();
                    break;
                case 10:
                    message.timestamp = reader.int64();
                    break;
                case 11:
                    message.request = $root.dhlmixer.DHLMixerRequestData.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.response = $root.dhlmixer.DHLMixerResponseData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a KerfuMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dhlmixer.KerfuMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dhlmixer.KerfuMessage} KerfuMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KerfuMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a KerfuMessage message.
         * @function verify
         * @memberof dhlmixer.KerfuMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        KerfuMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.messageId != null && message.hasOwnProperty("messageId"))
                if (!$util.isInteger(message.messageId) && !(message.messageId && $util.isInteger(message.messageId.low) && $util.isInteger(message.messageId.high)))
                    return "messageId: integer|Long expected";
            if (message.sessionId != null && message.hasOwnProperty("sessionId"))
                if (!$util.isInteger(message.sessionId))
                    return "sessionId: integer expected";
            if (message.messageType != null && message.hasOwnProperty("messageType"))
                switch (message.messageType) {
                default:
                    return "messageType: enum value expected";
                case 0:
                case 1:
                case 2:
                case 4:
                    break;
                }
            if (message.platformType != null && message.hasOwnProperty("platformType"))
                if (!$util.isString(message.platformType))
                    return "platformType: string expected";
            if (message.appId != null && message.hasOwnProperty("appId"))
                if (!$util.isString(message.appId))
                    return "appId: string expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isString(message.userId))
                    return "userId: string expected";
            if (message.userName != null && message.hasOwnProperty("userName"))
                if (!$util.isString(message.userName))
                    return "userName: string expected";
            if (message.agentId != null && message.hasOwnProperty("agentId"))
                if (!$util.isString(message.agentId))
                    return "agentId: string expected";
            if (message.agentName != null && message.hasOwnProperty("agentName"))
                if (!$util.isString(message.agentName))
                    return "agentName: string expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            if (message.request != null && message.hasOwnProperty("request")) {
                properties.content = 1;
                {
                    var error = $root.dhlmixer.DHLMixerRequestData.verify(message.request);
                    if (error)
                        return "request." + error;
                }
            }
            if (message.response != null && message.hasOwnProperty("response")) {
                if (properties.content === 1)
                    return "content: multiple values";
                properties.content = 1;
                {
                    var error = $root.dhlmixer.DHLMixerResponseData.verify(message.response);
                    if (error)
                        return "response." + error;
                }
            }
            return null;
        };

        /**
         * Creates a KerfuMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dhlmixer.KerfuMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dhlmixer.KerfuMessage} KerfuMessage
         */
        KerfuMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.dhlmixer.KerfuMessage)
                return object;
            var message = new $root.dhlmixer.KerfuMessage();
            if (object.messageId != null)
                if ($util.Long)
                    (message.messageId = $util.Long.fromValue(object.messageId)).unsigned = false;
                else if (typeof object.messageId === "string")
                    message.messageId = parseInt(object.messageId, 10);
                else if (typeof object.messageId === "number")
                    message.messageId = object.messageId;
                else if (typeof object.messageId === "object")
                    message.messageId = new $util.LongBits(object.messageId.low >>> 0, object.messageId.high >>> 0).toNumber();
            if (object.sessionId != null)
                message.sessionId = object.sessionId | 0;
            switch (object.messageType) {
            case "Any":
            case 0:
                message.messageType = 0;
                break;
            case "Request":
            case 1:
                message.messageType = 1;
                break;
            case "Response":
            case 2:
                message.messageType = 2;
                break;
            case "PhantomResponse":
            case 4:
                message.messageType = 4;
                break;
            }
            if (object.platformType != null)
                message.platformType = String(object.platformType);
            if (object.appId != null)
                message.appId = String(object.appId);
            if (object.userId != null)
                message.userId = String(object.userId);
            if (object.userName != null)
                message.userName = String(object.userName);
            if (object.agentId != null)
                message.agentId = String(object.agentId);
            if (object.agentName != null)
                message.agentName = String(object.agentName);
            if (object.timestamp != null)
                if ($util.Long)
                    (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                else if (typeof object.timestamp === "string")
                    message.timestamp = parseInt(object.timestamp, 10);
                else if (typeof object.timestamp === "number")
                    message.timestamp = object.timestamp;
                else if (typeof object.timestamp === "object")
                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
            if (object.request != null) {
                if (typeof object.request !== "object")
                    throw TypeError(".dhlmixer.KerfuMessage.request: object expected");
                message.request = $root.dhlmixer.DHLMixerRequestData.fromObject(object.request);
            }
            if (object.response != null) {
                if (typeof object.response !== "object")
                    throw TypeError(".dhlmixer.KerfuMessage.response: object expected");
                message.response = $root.dhlmixer.DHLMixerResponseData.fromObject(object.response);
            }
            return message;
        };

        /**
         * Creates a plain object from a KerfuMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dhlmixer.KerfuMessage
         * @static
         * @param {dhlmixer.KerfuMessage} message KerfuMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        KerfuMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.messageId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.messageId = options.longs === String ? "0" : 0;
                object.sessionId = 0;
                object.messageType = options.enums === String ? "Any" : 0;
                object.platformType = "";
                object.appId = "";
                object.userId = "";
                object.userName = "";
                object.agentId = "";
                object.agentName = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestamp = options.longs === String ? "0" : 0;
            }
            if (message.messageId != null && message.hasOwnProperty("messageId"))
                if (typeof message.messageId === "number")
                    object.messageId = options.longs === String ? String(message.messageId) : message.messageId;
                else
                    object.messageId = options.longs === String ? $util.Long.prototype.toString.call(message.messageId) : options.longs === Number ? new $util.LongBits(message.messageId.low >>> 0, message.messageId.high >>> 0).toNumber() : message.messageId;
            if (message.sessionId != null && message.hasOwnProperty("sessionId"))
                object.sessionId = message.sessionId;
            if (message.messageType != null && message.hasOwnProperty("messageType"))
                object.messageType = options.enums === String ? $root.dhlmixer.KerfuMessageType[message.messageType] : message.messageType;
            if (message.platformType != null && message.hasOwnProperty("platformType"))
                object.platformType = message.platformType;
            if (message.appId != null && message.hasOwnProperty("appId"))
                object.appId = message.appId;
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.userName != null && message.hasOwnProperty("userName"))
                object.userName = message.userName;
            if (message.agentId != null && message.hasOwnProperty("agentId"))
                object.agentId = message.agentId;
            if (message.agentName != null && message.hasOwnProperty("agentName"))
                object.agentName = message.agentName;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
            if (message.request != null && message.hasOwnProperty("request")) {
                object.request = $root.dhlmixer.DHLMixerRequestData.toObject(message.request, options);
                if (options.oneofs)
                    object.content = "request";
            }
            if (message.response != null && message.hasOwnProperty("response")) {
                object.response = $root.dhlmixer.DHLMixerResponseData.toObject(message.response, options);
                if (options.oneofs)
                    object.content = "response";
            }
            return object;
        };

        /**
         * Converts this KerfuMessage to JSON.
         * @function toJSON
         * @memberof dhlmixer.KerfuMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        KerfuMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return KerfuMessage;
    })();

    dhlmixer.KerfuError = (function() {

        /**
         * Properties of a KerfuError.
         * @memberof dhlmixer
         * @interface IKerfuError
         * @property {number|null} [errorCode] KerfuError errorCode
         * @property {string|null} [errorMessage] KerfuError errorMessage
         */

        /**
         * Constructs a new KerfuError.
         * @memberof dhlmixer
         * @classdesc Represents a KerfuError.
         * @implements IKerfuError
         * @constructor
         * @param {dhlmixer.IKerfuError=} [properties] Properties to set
         */
        function KerfuError(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * KerfuError errorCode.
         * @member {number} errorCode
         * @memberof dhlmixer.KerfuError
         * @instance
         */
        KerfuError.prototype.errorCode = 0;

        /**
         * KerfuError errorMessage.
         * @member {string} errorMessage
         * @memberof dhlmixer.KerfuError
         * @instance
         */
        KerfuError.prototype.errorMessage = "";

        /**
         * Creates a new KerfuError instance using the specified properties.
         * @function create
         * @memberof dhlmixer.KerfuError
         * @static
         * @param {dhlmixer.IKerfuError=} [properties] Properties to set
         * @returns {dhlmixer.KerfuError} KerfuError instance
         */
        KerfuError.create = function create(properties) {
            return new KerfuError(properties);
        };

        /**
         * Encodes the specified KerfuError message. Does not implicitly {@link dhlmixer.KerfuError.verify|verify} messages.
         * @function encode
         * @memberof dhlmixer.KerfuError
         * @static
         * @param {dhlmixer.IKerfuError} message KerfuError message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KerfuError.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errorCode != null && message.hasOwnProperty("errorCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errorCode);
            if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.errorMessage);
            return writer;
        };

        /**
         * Encodes the specified KerfuError message, length delimited. Does not implicitly {@link dhlmixer.KerfuError.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dhlmixer.KerfuError
         * @static
         * @param {dhlmixer.IKerfuError} message KerfuError message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KerfuError.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a KerfuError message from the specified reader or buffer.
         * @function decode
         * @memberof dhlmixer.KerfuError
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dhlmixer.KerfuError} KerfuError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KerfuError.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dhlmixer.KerfuError();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.errorCode = reader.int32();
                    break;
                case 2:
                    message.errorMessage = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a KerfuError message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dhlmixer.KerfuError
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dhlmixer.KerfuError} KerfuError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KerfuError.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a KerfuError message.
         * @function verify
         * @memberof dhlmixer.KerfuError
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        KerfuError.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.errorCode != null && message.hasOwnProperty("errorCode"))
                if (!$util.isInteger(message.errorCode))
                    return "errorCode: integer expected";
            if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                if (!$util.isString(message.errorMessage))
                    return "errorMessage: string expected";
            return null;
        };

        /**
         * Creates a KerfuError message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dhlmixer.KerfuError
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dhlmixer.KerfuError} KerfuError
         */
        KerfuError.fromObject = function fromObject(object) {
            if (object instanceof $root.dhlmixer.KerfuError)
                return object;
            var message = new $root.dhlmixer.KerfuError();
            if (object.errorCode != null)
                message.errorCode = object.errorCode | 0;
            if (object.errorMessage != null)
                message.errorMessage = String(object.errorMessage);
            return message;
        };

        /**
         * Creates a plain object from a KerfuError message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dhlmixer.KerfuError
         * @static
         * @param {dhlmixer.KerfuError} message KerfuError
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        KerfuError.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.errorCode = 0;
                object.errorMessage = "";
            }
            if (message.errorCode != null && message.hasOwnProperty("errorCode"))
                object.errorCode = message.errorCode;
            if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                object.errorMessage = message.errorMessage;
            return object;
        };

        /**
         * Converts this KerfuError to JSON.
         * @function toJSON
         * @memberof dhlmixer.KerfuError
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        KerfuError.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return KerfuError;
    })();

    dhlmixer.KerfuMessageAck = (function() {

        /**
         * Properties of a KerfuMessageAck.
         * @memberof dhlmixer
         * @interface IKerfuMessageAck
         * @property {number|null} [sessionId] KerfuMessageAck sessionId
         * @property {number|Long|null} [messageId] KerfuMessageAck messageId
         * @property {number|Long|null} [timestamp] KerfuMessageAck timestamp
         */

        /**
         * Constructs a new KerfuMessageAck.
         * @memberof dhlmixer
         * @classdesc Represents a KerfuMessageAck.
         * @implements IKerfuMessageAck
         * @constructor
         * @param {dhlmixer.IKerfuMessageAck=} [properties] Properties to set
         */
        function KerfuMessageAck(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * KerfuMessageAck sessionId.
         * @member {number} sessionId
         * @memberof dhlmixer.KerfuMessageAck
         * @instance
         */
        KerfuMessageAck.prototype.sessionId = 0;

        /**
         * KerfuMessageAck messageId.
         * @member {number|Long} messageId
         * @memberof dhlmixer.KerfuMessageAck
         * @instance
         */
        KerfuMessageAck.prototype.messageId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * KerfuMessageAck timestamp.
         * @member {number|Long} timestamp
         * @memberof dhlmixer.KerfuMessageAck
         * @instance
         */
        KerfuMessageAck.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new KerfuMessageAck instance using the specified properties.
         * @function create
         * @memberof dhlmixer.KerfuMessageAck
         * @static
         * @param {dhlmixer.IKerfuMessageAck=} [properties] Properties to set
         * @returns {dhlmixer.KerfuMessageAck} KerfuMessageAck instance
         */
        KerfuMessageAck.create = function create(properties) {
            return new KerfuMessageAck(properties);
        };

        /**
         * Encodes the specified KerfuMessageAck message. Does not implicitly {@link dhlmixer.KerfuMessageAck.verify|verify} messages.
         * @function encode
         * @memberof dhlmixer.KerfuMessageAck
         * @static
         * @param {dhlmixer.IKerfuMessageAck} message KerfuMessageAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KerfuMessageAck.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sessionId != null && message.hasOwnProperty("sessionId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.sessionId);
            if (message.messageId != null && message.hasOwnProperty("messageId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.messageId);
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.timestamp);
            return writer;
        };

        /**
         * Encodes the specified KerfuMessageAck message, length delimited. Does not implicitly {@link dhlmixer.KerfuMessageAck.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dhlmixer.KerfuMessageAck
         * @static
         * @param {dhlmixer.IKerfuMessageAck} message KerfuMessageAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KerfuMessageAck.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a KerfuMessageAck message from the specified reader or buffer.
         * @function decode
         * @memberof dhlmixer.KerfuMessageAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dhlmixer.KerfuMessageAck} KerfuMessageAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KerfuMessageAck.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dhlmixer.KerfuMessageAck();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sessionId = reader.int32();
                    break;
                case 2:
                    message.messageId = reader.int64();
                    break;
                case 3:
                    message.timestamp = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a KerfuMessageAck message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dhlmixer.KerfuMessageAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dhlmixer.KerfuMessageAck} KerfuMessageAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KerfuMessageAck.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a KerfuMessageAck message.
         * @function verify
         * @memberof dhlmixer.KerfuMessageAck
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        KerfuMessageAck.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.sessionId != null && message.hasOwnProperty("sessionId"))
                if (!$util.isInteger(message.sessionId))
                    return "sessionId: integer expected";
            if (message.messageId != null && message.hasOwnProperty("messageId"))
                if (!$util.isInteger(message.messageId) && !(message.messageId && $util.isInteger(message.messageId.low) && $util.isInteger(message.messageId.high)))
                    return "messageId: integer|Long expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            return null;
        };

        /**
         * Creates a KerfuMessageAck message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dhlmixer.KerfuMessageAck
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dhlmixer.KerfuMessageAck} KerfuMessageAck
         */
        KerfuMessageAck.fromObject = function fromObject(object) {
            if (object instanceof $root.dhlmixer.KerfuMessageAck)
                return object;
            var message = new $root.dhlmixer.KerfuMessageAck();
            if (object.sessionId != null)
                message.sessionId = object.sessionId | 0;
            if (object.messageId != null)
                if ($util.Long)
                    (message.messageId = $util.Long.fromValue(object.messageId)).unsigned = false;
                else if (typeof object.messageId === "string")
                    message.messageId = parseInt(object.messageId, 10);
                else if (typeof object.messageId === "number")
                    message.messageId = object.messageId;
                else if (typeof object.messageId === "object")
                    message.messageId = new $util.LongBits(object.messageId.low >>> 0, object.messageId.high >>> 0).toNumber();
            if (object.timestamp != null)
                if ($util.Long)
                    (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                else if (typeof object.timestamp === "string")
                    message.timestamp = parseInt(object.timestamp, 10);
                else if (typeof object.timestamp === "number")
                    message.timestamp = object.timestamp;
                else if (typeof object.timestamp === "object")
                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a KerfuMessageAck message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dhlmixer.KerfuMessageAck
         * @static
         * @param {dhlmixer.KerfuMessageAck} message KerfuMessageAck
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        KerfuMessageAck.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.sessionId = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.messageId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.messageId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestamp = options.longs === String ? "0" : 0;
            }
            if (message.sessionId != null && message.hasOwnProperty("sessionId"))
                object.sessionId = message.sessionId;
            if (message.messageId != null && message.hasOwnProperty("messageId"))
                if (typeof message.messageId === "number")
                    object.messageId = options.longs === String ? String(message.messageId) : message.messageId;
                else
                    object.messageId = options.longs === String ? $util.Long.prototype.toString.call(message.messageId) : options.longs === Number ? new $util.LongBits(message.messageId.low >>> 0, message.messageId.high >>> 0).toNumber() : message.messageId;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
            return object;
        };

        /**
         * Converts this KerfuMessageAck to JSON.
         * @function toJSON
         * @memberof dhlmixer.KerfuMessageAck
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        KerfuMessageAck.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return KerfuMessageAck;
    })();

    dhlmixer.KerfuResponse = (function() {

        /**
         * Properties of a KerfuResponse.
         * @memberof dhlmixer
         * @interface IKerfuResponse
         * @property {dhlmixer.IKerfuMessageAck|null} [ack] KerfuResponse ack
         * @property {Array.<dhlmixer.IKerfuMessage>|null} [messages] KerfuResponse messages
         */

        /**
         * Constructs a new KerfuResponse.
         * @memberof dhlmixer
         * @classdesc Represents a KerfuResponse.
         * @implements IKerfuResponse
         * @constructor
         * @param {dhlmixer.IKerfuResponse=} [properties] Properties to set
         */
        function KerfuResponse(properties) {
            this.messages = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * KerfuResponse ack.
         * @member {dhlmixer.IKerfuMessageAck|null|undefined} ack
         * @memberof dhlmixer.KerfuResponse
         * @instance
         */
        KerfuResponse.prototype.ack = null;

        /**
         * KerfuResponse messages.
         * @member {Array.<dhlmixer.IKerfuMessage>} messages
         * @memberof dhlmixer.KerfuResponse
         * @instance
         */
        KerfuResponse.prototype.messages = $util.emptyArray;

        /**
         * Creates a new KerfuResponse instance using the specified properties.
         * @function create
         * @memberof dhlmixer.KerfuResponse
         * @static
         * @param {dhlmixer.IKerfuResponse=} [properties] Properties to set
         * @returns {dhlmixer.KerfuResponse} KerfuResponse instance
         */
        KerfuResponse.create = function create(properties) {
            return new KerfuResponse(properties);
        };

        /**
         * Encodes the specified KerfuResponse message. Does not implicitly {@link dhlmixer.KerfuResponse.verify|verify} messages.
         * @function encode
         * @memberof dhlmixer.KerfuResponse
         * @static
         * @param {dhlmixer.IKerfuResponse} message KerfuResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KerfuResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ack != null && message.hasOwnProperty("ack"))
                $root.dhlmixer.KerfuMessageAck.encode(message.ack, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.messages != null && message.messages.length)
                for (var i = 0; i < message.messages.length; ++i)
                    $root.dhlmixer.KerfuMessage.encode(message.messages[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified KerfuResponse message, length delimited. Does not implicitly {@link dhlmixer.KerfuResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dhlmixer.KerfuResponse
         * @static
         * @param {dhlmixer.IKerfuResponse} message KerfuResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KerfuResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a KerfuResponse message from the specified reader or buffer.
         * @function decode
         * @memberof dhlmixer.KerfuResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dhlmixer.KerfuResponse} KerfuResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KerfuResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dhlmixer.KerfuResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ack = $root.dhlmixer.KerfuMessageAck.decode(reader, reader.uint32());
                    break;
                case 2:
                    if (!(message.messages && message.messages.length))
                        message.messages = [];
                    message.messages.push($root.dhlmixer.KerfuMessage.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a KerfuResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dhlmixer.KerfuResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dhlmixer.KerfuResponse} KerfuResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KerfuResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a KerfuResponse message.
         * @function verify
         * @memberof dhlmixer.KerfuResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        KerfuResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ack != null && message.hasOwnProperty("ack")) {
                var error = $root.dhlmixer.KerfuMessageAck.verify(message.ack);
                if (error)
                    return "ack." + error;
            }
            if (message.messages != null && message.hasOwnProperty("messages")) {
                if (!Array.isArray(message.messages))
                    return "messages: array expected";
                for (var i = 0; i < message.messages.length; ++i) {
                    var error = $root.dhlmixer.KerfuMessage.verify(message.messages[i]);
                    if (error)
                        return "messages." + error;
                }
            }
            return null;
        };

        /**
         * Creates a KerfuResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dhlmixer.KerfuResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dhlmixer.KerfuResponse} KerfuResponse
         */
        KerfuResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.dhlmixer.KerfuResponse)
                return object;
            var message = new $root.dhlmixer.KerfuResponse();
            if (object.ack != null) {
                if (typeof object.ack !== "object")
                    throw TypeError(".dhlmixer.KerfuResponse.ack: object expected");
                message.ack = $root.dhlmixer.KerfuMessageAck.fromObject(object.ack);
            }
            if (object.messages) {
                if (!Array.isArray(object.messages))
                    throw TypeError(".dhlmixer.KerfuResponse.messages: array expected");
                message.messages = [];
                for (var i = 0; i < object.messages.length; ++i) {
                    if (typeof object.messages[i] !== "object")
                        throw TypeError(".dhlmixer.KerfuResponse.messages: object expected");
                    message.messages[i] = $root.dhlmixer.KerfuMessage.fromObject(object.messages[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a KerfuResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dhlmixer.KerfuResponse
         * @static
         * @param {dhlmixer.KerfuResponse} message KerfuResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        KerfuResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.messages = [];
            if (options.defaults)
                object.ack = null;
            if (message.ack != null && message.hasOwnProperty("ack"))
                object.ack = $root.dhlmixer.KerfuMessageAck.toObject(message.ack, options);
            if (message.messages && message.messages.length) {
                object.messages = [];
                for (var j = 0; j < message.messages.length; ++j)
                    object.messages[j] = $root.dhlmixer.KerfuMessage.toObject(message.messages[j], options);
            }
            return object;
        };

        /**
         * Converts this KerfuResponse to JSON.
         * @function toJSON
         * @memberof dhlmixer.KerfuResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        KerfuResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return KerfuResponse;
    })();

    dhlmixer.KerfuMessageFilter = (function() {

        /**
         * Properties of a KerfuMessageFilter.
         * @memberof dhlmixer
         * @interface IKerfuMessageFilter
         * @property {number|null} [sessionId] KerfuMessageFilter sessionId
         * @property {number|Long|null} [messageId] KerfuMessageFilter messageId
         * @property {number|Long|null} [before] KerfuMessageFilter before
         * @property {number|Long|null} [after] KerfuMessageFilter after
         * @property {number|null} [page] KerfuMessageFilter page
         * @property {number|null} [pageSize] KerfuMessageFilter pageSize
         * @property {dhlmixer.KerfuMessageType|null} [messageType] KerfuMessageFilter messageType
         */

        /**
         * Constructs a new KerfuMessageFilter.
         * @memberof dhlmixer
         * @classdesc Represents a KerfuMessageFilter.
         * @implements IKerfuMessageFilter
         * @constructor
         * @param {dhlmixer.IKerfuMessageFilter=} [properties] Properties to set
         */
        function KerfuMessageFilter(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * KerfuMessageFilter sessionId.
         * @member {number} sessionId
         * @memberof dhlmixer.KerfuMessageFilter
         * @instance
         */
        KerfuMessageFilter.prototype.sessionId = 0;

        /**
         * KerfuMessageFilter messageId.
         * @member {number|Long} messageId
         * @memberof dhlmixer.KerfuMessageFilter
         * @instance
         */
        KerfuMessageFilter.prototype.messageId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * KerfuMessageFilter before.
         * @member {number|Long} before
         * @memberof dhlmixer.KerfuMessageFilter
         * @instance
         */
        KerfuMessageFilter.prototype.before = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * KerfuMessageFilter after.
         * @member {number|Long} after
         * @memberof dhlmixer.KerfuMessageFilter
         * @instance
         */
        KerfuMessageFilter.prototype.after = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * KerfuMessageFilter page.
         * @member {number} page
         * @memberof dhlmixer.KerfuMessageFilter
         * @instance
         */
        KerfuMessageFilter.prototype.page = 0;

        /**
         * KerfuMessageFilter pageSize.
         * @member {number} pageSize
         * @memberof dhlmixer.KerfuMessageFilter
         * @instance
         */
        KerfuMessageFilter.prototype.pageSize = 0;

        /**
         * KerfuMessageFilter messageType.
         * @member {dhlmixer.KerfuMessageType} messageType
         * @memberof dhlmixer.KerfuMessageFilter
         * @instance
         */
        KerfuMessageFilter.prototype.messageType = 0;

        /**
         * Creates a new KerfuMessageFilter instance using the specified properties.
         * @function create
         * @memberof dhlmixer.KerfuMessageFilter
         * @static
         * @param {dhlmixer.IKerfuMessageFilter=} [properties] Properties to set
         * @returns {dhlmixer.KerfuMessageFilter} KerfuMessageFilter instance
         */
        KerfuMessageFilter.create = function create(properties) {
            return new KerfuMessageFilter(properties);
        };

        /**
         * Encodes the specified KerfuMessageFilter message. Does not implicitly {@link dhlmixer.KerfuMessageFilter.verify|verify} messages.
         * @function encode
         * @memberof dhlmixer.KerfuMessageFilter
         * @static
         * @param {dhlmixer.IKerfuMessageFilter} message KerfuMessageFilter message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KerfuMessageFilter.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sessionId != null && message.hasOwnProperty("sessionId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.sessionId);
            if (message.messageId != null && message.hasOwnProperty("messageId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.messageId);
            if (message.before != null && message.hasOwnProperty("before"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.before);
            if (message.after != null && message.hasOwnProperty("after"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.after);
            if (message.page != null && message.hasOwnProperty("page"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.page);
            if (message.pageSize != null && message.hasOwnProperty("pageSize"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.pageSize);
            if (message.messageType != null && message.hasOwnProperty("messageType"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.messageType);
            return writer;
        };

        /**
         * Encodes the specified KerfuMessageFilter message, length delimited. Does not implicitly {@link dhlmixer.KerfuMessageFilter.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dhlmixer.KerfuMessageFilter
         * @static
         * @param {dhlmixer.IKerfuMessageFilter} message KerfuMessageFilter message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KerfuMessageFilter.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a KerfuMessageFilter message from the specified reader or buffer.
         * @function decode
         * @memberof dhlmixer.KerfuMessageFilter
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dhlmixer.KerfuMessageFilter} KerfuMessageFilter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KerfuMessageFilter.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dhlmixer.KerfuMessageFilter();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sessionId = reader.int32();
                    break;
                case 2:
                    message.messageId = reader.int64();
                    break;
                case 3:
                    message.before = reader.int64();
                    break;
                case 4:
                    message.after = reader.int64();
                    break;
                case 5:
                    message.page = reader.int32();
                    break;
                case 6:
                    message.pageSize = reader.int32();
                    break;
                case 7:
                    message.messageType = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a KerfuMessageFilter message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dhlmixer.KerfuMessageFilter
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dhlmixer.KerfuMessageFilter} KerfuMessageFilter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KerfuMessageFilter.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a KerfuMessageFilter message.
         * @function verify
         * @memberof dhlmixer.KerfuMessageFilter
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        KerfuMessageFilter.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.sessionId != null && message.hasOwnProperty("sessionId"))
                if (!$util.isInteger(message.sessionId))
                    return "sessionId: integer expected";
            if (message.messageId != null && message.hasOwnProperty("messageId"))
                if (!$util.isInteger(message.messageId) && !(message.messageId && $util.isInteger(message.messageId.low) && $util.isInteger(message.messageId.high)))
                    return "messageId: integer|Long expected";
            if (message.before != null && message.hasOwnProperty("before"))
                if (!$util.isInteger(message.before) && !(message.before && $util.isInteger(message.before.low) && $util.isInteger(message.before.high)))
                    return "before: integer|Long expected";
            if (message.after != null && message.hasOwnProperty("after"))
                if (!$util.isInteger(message.after) && !(message.after && $util.isInteger(message.after.low) && $util.isInteger(message.after.high)))
                    return "after: integer|Long expected";
            if (message.page != null && message.hasOwnProperty("page"))
                if (!$util.isInteger(message.page))
                    return "page: integer expected";
            if (message.pageSize != null && message.hasOwnProperty("pageSize"))
                if (!$util.isInteger(message.pageSize))
                    return "pageSize: integer expected";
            if (message.messageType != null && message.hasOwnProperty("messageType"))
                switch (message.messageType) {
                default:
                    return "messageType: enum value expected";
                case 0:
                case 1:
                case 2:
                case 4:
                    break;
                }
            return null;
        };

        /**
         * Creates a KerfuMessageFilter message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dhlmixer.KerfuMessageFilter
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dhlmixer.KerfuMessageFilter} KerfuMessageFilter
         */
        KerfuMessageFilter.fromObject = function fromObject(object) {
            if (object instanceof $root.dhlmixer.KerfuMessageFilter)
                return object;
            var message = new $root.dhlmixer.KerfuMessageFilter();
            if (object.sessionId != null)
                message.sessionId = object.sessionId | 0;
            if (object.messageId != null)
                if ($util.Long)
                    (message.messageId = $util.Long.fromValue(object.messageId)).unsigned = false;
                else if (typeof object.messageId === "string")
                    message.messageId = parseInt(object.messageId, 10);
                else if (typeof object.messageId === "number")
                    message.messageId = object.messageId;
                else if (typeof object.messageId === "object")
                    message.messageId = new $util.LongBits(object.messageId.low >>> 0, object.messageId.high >>> 0).toNumber();
            if (object.before != null)
                if ($util.Long)
                    (message.before = $util.Long.fromValue(object.before)).unsigned = false;
                else if (typeof object.before === "string")
                    message.before = parseInt(object.before, 10);
                else if (typeof object.before === "number")
                    message.before = object.before;
                else if (typeof object.before === "object")
                    message.before = new $util.LongBits(object.before.low >>> 0, object.before.high >>> 0).toNumber();
            if (object.after != null)
                if ($util.Long)
                    (message.after = $util.Long.fromValue(object.after)).unsigned = false;
                else if (typeof object.after === "string")
                    message.after = parseInt(object.after, 10);
                else if (typeof object.after === "number")
                    message.after = object.after;
                else if (typeof object.after === "object")
                    message.after = new $util.LongBits(object.after.low >>> 0, object.after.high >>> 0).toNumber();
            if (object.page != null)
                message.page = object.page | 0;
            if (object.pageSize != null)
                message.pageSize = object.pageSize | 0;
            switch (object.messageType) {
            case "Any":
            case 0:
                message.messageType = 0;
                break;
            case "Request":
            case 1:
                message.messageType = 1;
                break;
            case "Response":
            case 2:
                message.messageType = 2;
                break;
            case "PhantomResponse":
            case 4:
                message.messageType = 4;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a KerfuMessageFilter message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dhlmixer.KerfuMessageFilter
         * @static
         * @param {dhlmixer.KerfuMessageFilter} message KerfuMessageFilter
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        KerfuMessageFilter.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.sessionId = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.messageId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.messageId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.before = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.before = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.after = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.after = options.longs === String ? "0" : 0;
                object.page = 0;
                object.pageSize = 0;
                object.messageType = options.enums === String ? "Any" : 0;
            }
            if (message.sessionId != null && message.hasOwnProperty("sessionId"))
                object.sessionId = message.sessionId;
            if (message.messageId != null && message.hasOwnProperty("messageId"))
                if (typeof message.messageId === "number")
                    object.messageId = options.longs === String ? String(message.messageId) : message.messageId;
                else
                    object.messageId = options.longs === String ? $util.Long.prototype.toString.call(message.messageId) : options.longs === Number ? new $util.LongBits(message.messageId.low >>> 0, message.messageId.high >>> 0).toNumber() : message.messageId;
            if (message.before != null && message.hasOwnProperty("before"))
                if (typeof message.before === "number")
                    object.before = options.longs === String ? String(message.before) : message.before;
                else
                    object.before = options.longs === String ? $util.Long.prototype.toString.call(message.before) : options.longs === Number ? new $util.LongBits(message.before.low >>> 0, message.before.high >>> 0).toNumber() : message.before;
            if (message.after != null && message.hasOwnProperty("after"))
                if (typeof message.after === "number")
                    object.after = options.longs === String ? String(message.after) : message.after;
                else
                    object.after = options.longs === String ? $util.Long.prototype.toString.call(message.after) : options.longs === Number ? new $util.LongBits(message.after.low >>> 0, message.after.high >>> 0).toNumber() : message.after;
            if (message.page != null && message.hasOwnProperty("page"))
                object.page = message.page;
            if (message.pageSize != null && message.hasOwnProperty("pageSize"))
                object.pageSize = message.pageSize;
            if (message.messageType != null && message.hasOwnProperty("messageType"))
                object.messageType = options.enums === String ? $root.dhlmixer.KerfuMessageType[message.messageType] : message.messageType;
            return object;
        };

        /**
         * Converts this KerfuMessageFilter to JSON.
         * @function toJSON
         * @memberof dhlmixer.KerfuMessageFilter
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        KerfuMessageFilter.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return KerfuMessageFilter;
    })();

    dhlmixer.KerfuMessageList = (function() {

        /**
         * Properties of a KerfuMessageList.
         * @memberof dhlmixer
         * @interface IKerfuMessageList
         * @property {Array.<dhlmixer.IKerfuMessage>|null} [messages] KerfuMessageList messages
         */

        /**
         * Constructs a new KerfuMessageList.
         * @memberof dhlmixer
         * @classdesc Represents a KerfuMessageList.
         * @implements IKerfuMessageList
         * @constructor
         * @param {dhlmixer.IKerfuMessageList=} [properties] Properties to set
         */
        function KerfuMessageList(properties) {
            this.messages = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * KerfuMessageList messages.
         * @member {Array.<dhlmixer.IKerfuMessage>} messages
         * @memberof dhlmixer.KerfuMessageList
         * @instance
         */
        KerfuMessageList.prototype.messages = $util.emptyArray;

        /**
         * Creates a new KerfuMessageList instance using the specified properties.
         * @function create
         * @memberof dhlmixer.KerfuMessageList
         * @static
         * @param {dhlmixer.IKerfuMessageList=} [properties] Properties to set
         * @returns {dhlmixer.KerfuMessageList} KerfuMessageList instance
         */
        KerfuMessageList.create = function create(properties) {
            return new KerfuMessageList(properties);
        };

        /**
         * Encodes the specified KerfuMessageList message. Does not implicitly {@link dhlmixer.KerfuMessageList.verify|verify} messages.
         * @function encode
         * @memberof dhlmixer.KerfuMessageList
         * @static
         * @param {dhlmixer.IKerfuMessageList} message KerfuMessageList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KerfuMessageList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.messages != null && message.messages.length)
                for (var i = 0; i < message.messages.length; ++i)
                    $root.dhlmixer.KerfuMessage.encode(message.messages[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified KerfuMessageList message, length delimited. Does not implicitly {@link dhlmixer.KerfuMessageList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dhlmixer.KerfuMessageList
         * @static
         * @param {dhlmixer.IKerfuMessageList} message KerfuMessageList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KerfuMessageList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a KerfuMessageList message from the specified reader or buffer.
         * @function decode
         * @memberof dhlmixer.KerfuMessageList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dhlmixer.KerfuMessageList} KerfuMessageList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KerfuMessageList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dhlmixer.KerfuMessageList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.messages && message.messages.length))
                        message.messages = [];
                    message.messages.push($root.dhlmixer.KerfuMessage.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a KerfuMessageList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dhlmixer.KerfuMessageList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dhlmixer.KerfuMessageList} KerfuMessageList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KerfuMessageList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a KerfuMessageList message.
         * @function verify
         * @memberof dhlmixer.KerfuMessageList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        KerfuMessageList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.messages != null && message.hasOwnProperty("messages")) {
                if (!Array.isArray(message.messages))
                    return "messages: array expected";
                for (var i = 0; i < message.messages.length; ++i) {
                    var error = $root.dhlmixer.KerfuMessage.verify(message.messages[i]);
                    if (error)
                        return "messages." + error;
                }
            }
            return null;
        };

        /**
         * Creates a KerfuMessageList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dhlmixer.KerfuMessageList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dhlmixer.KerfuMessageList} KerfuMessageList
         */
        KerfuMessageList.fromObject = function fromObject(object) {
            if (object instanceof $root.dhlmixer.KerfuMessageList)
                return object;
            var message = new $root.dhlmixer.KerfuMessageList();
            if (object.messages) {
                if (!Array.isArray(object.messages))
                    throw TypeError(".dhlmixer.KerfuMessageList.messages: array expected");
                message.messages = [];
                for (var i = 0; i < object.messages.length; ++i) {
                    if (typeof object.messages[i] !== "object")
                        throw TypeError(".dhlmixer.KerfuMessageList.messages: object expected");
                    message.messages[i] = $root.dhlmixer.KerfuMessage.fromObject(object.messages[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a KerfuMessageList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dhlmixer.KerfuMessageList
         * @static
         * @param {dhlmixer.KerfuMessageList} message KerfuMessageList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        KerfuMessageList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.messages = [];
            if (message.messages && message.messages.length) {
                object.messages = [];
                for (var j = 0; j < message.messages.length; ++j)
                    object.messages[j] = $root.dhlmixer.KerfuMessage.toObject(message.messages[j], options);
            }
            return object;
        };

        /**
         * Converts this KerfuMessageList to JSON.
         * @function toJSON
         * @memberof dhlmixer.KerfuMessageList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        KerfuMessageList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return KerfuMessageList;
    })();

    /**
     * Action enum.
     * @name dhlmixer.Action
     * @enum {string}
     * @property {number} Authentication=0 Authentication value
     * @property {number} EndConversation=1 EndConversation value
     */
    dhlmixer.Action = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Authentication"] = 0;
        values[valuesById[1] = "EndConversation"] = 1;
        return values;
    })();

    /**
     * Event enum.
     * @name dhlmixer.Event
     * @enum {string}
     * @property {number} ActionReply=0 ActionReply value
     * @property {number} MessagePosted=1 MessagePosted value
     */
    dhlmixer.Event = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "ActionReply"] = 0;
        values[valuesById[1] = "MessagePosted"] = 1;
        return values;
    })();

    dhlmixer.KerfuAuthenticationData = (function() {

        /**
         * Properties of a KerfuAuthenticationData.
         * @memberof dhlmixer
         * @interface IKerfuAuthenticationData
         * @property {string|null} [platformType] KerfuAuthenticationData platformType
         * @property {string|null} [appId] KerfuAuthenticationData appId
         * @property {string|null} [userId] KerfuAuthenticationData userId
         * @property {boolean|null} [isSupport] KerfuAuthenticationData isSupport
         */

        /**
         * Constructs a new KerfuAuthenticationData.
         * @memberof dhlmixer
         * @classdesc Represents a KerfuAuthenticationData.
         * @implements IKerfuAuthenticationData
         * @constructor
         * @param {dhlmixer.IKerfuAuthenticationData=} [properties] Properties to set
         */
        function KerfuAuthenticationData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * KerfuAuthenticationData platformType.
         * @member {string} platformType
         * @memberof dhlmixer.KerfuAuthenticationData
         * @instance
         */
        KerfuAuthenticationData.prototype.platformType = "";

        /**
         * KerfuAuthenticationData appId.
         * @member {string} appId
         * @memberof dhlmixer.KerfuAuthenticationData
         * @instance
         */
        KerfuAuthenticationData.prototype.appId = "";

        /**
         * KerfuAuthenticationData userId.
         * @member {string} userId
         * @memberof dhlmixer.KerfuAuthenticationData
         * @instance
         */
        KerfuAuthenticationData.prototype.userId = "";

        /**
         * KerfuAuthenticationData isSupport.
         * @member {boolean} isSupport
         * @memberof dhlmixer.KerfuAuthenticationData
         * @instance
         */
        KerfuAuthenticationData.prototype.isSupport = false;

        /**
         * Creates a new KerfuAuthenticationData instance using the specified properties.
         * @function create
         * @memberof dhlmixer.KerfuAuthenticationData
         * @static
         * @param {dhlmixer.IKerfuAuthenticationData=} [properties] Properties to set
         * @returns {dhlmixer.KerfuAuthenticationData} KerfuAuthenticationData instance
         */
        KerfuAuthenticationData.create = function create(properties) {
            return new KerfuAuthenticationData(properties);
        };

        /**
         * Encodes the specified KerfuAuthenticationData message. Does not implicitly {@link dhlmixer.KerfuAuthenticationData.verify|verify} messages.
         * @function encode
         * @memberof dhlmixer.KerfuAuthenticationData
         * @static
         * @param {dhlmixer.IKerfuAuthenticationData} message KerfuAuthenticationData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KerfuAuthenticationData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.platformType != null && message.hasOwnProperty("platformType"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.platformType);
            if (message.appId != null && message.hasOwnProperty("appId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.appId);
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.userId);
            if (message.isSupport != null && message.hasOwnProperty("isSupport"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.isSupport);
            return writer;
        };

        /**
         * Encodes the specified KerfuAuthenticationData message, length delimited. Does not implicitly {@link dhlmixer.KerfuAuthenticationData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dhlmixer.KerfuAuthenticationData
         * @static
         * @param {dhlmixer.IKerfuAuthenticationData} message KerfuAuthenticationData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KerfuAuthenticationData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a KerfuAuthenticationData message from the specified reader or buffer.
         * @function decode
         * @memberof dhlmixer.KerfuAuthenticationData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dhlmixer.KerfuAuthenticationData} KerfuAuthenticationData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KerfuAuthenticationData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dhlmixer.KerfuAuthenticationData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.platformType = reader.string();
                    break;
                case 2:
                    message.appId = reader.string();
                    break;
                case 3:
                    message.userId = reader.string();
                    break;
                case 4:
                    message.isSupport = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a KerfuAuthenticationData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dhlmixer.KerfuAuthenticationData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dhlmixer.KerfuAuthenticationData} KerfuAuthenticationData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KerfuAuthenticationData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a KerfuAuthenticationData message.
         * @function verify
         * @memberof dhlmixer.KerfuAuthenticationData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        KerfuAuthenticationData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.platformType != null && message.hasOwnProperty("platformType"))
                if (!$util.isString(message.platformType))
                    return "platformType: string expected";
            if (message.appId != null && message.hasOwnProperty("appId"))
                if (!$util.isString(message.appId))
                    return "appId: string expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isString(message.userId))
                    return "userId: string expected";
            if (message.isSupport != null && message.hasOwnProperty("isSupport"))
                if (typeof message.isSupport !== "boolean")
                    return "isSupport: boolean expected";
            return null;
        };

        /**
         * Creates a KerfuAuthenticationData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dhlmixer.KerfuAuthenticationData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dhlmixer.KerfuAuthenticationData} KerfuAuthenticationData
         */
        KerfuAuthenticationData.fromObject = function fromObject(object) {
            if (object instanceof $root.dhlmixer.KerfuAuthenticationData)
                return object;
            var message = new $root.dhlmixer.KerfuAuthenticationData();
            if (object.platformType != null)
                message.platformType = String(object.platformType);
            if (object.appId != null)
                message.appId = String(object.appId);
            if (object.userId != null)
                message.userId = String(object.userId);
            if (object.isSupport != null)
                message.isSupport = Boolean(object.isSupport);
            return message;
        };

        /**
         * Creates a plain object from a KerfuAuthenticationData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dhlmixer.KerfuAuthenticationData
         * @static
         * @param {dhlmixer.KerfuAuthenticationData} message KerfuAuthenticationData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        KerfuAuthenticationData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.platformType = "";
                object.appId = "";
                object.userId = "";
                object.isSupport = false;
            }
            if (message.platformType != null && message.hasOwnProperty("platformType"))
                object.platformType = message.platformType;
            if (message.appId != null && message.hasOwnProperty("appId"))
                object.appId = message.appId;
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.isSupport != null && message.hasOwnProperty("isSupport"))
                object.isSupport = message.isSupport;
            return object;
        };

        /**
         * Converts this KerfuAuthenticationData to JSON.
         * @function toJSON
         * @memberof dhlmixer.KerfuAuthenticationData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        KerfuAuthenticationData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return KerfuAuthenticationData;
    })();

    dhlmixer.EndConversationData = (function() {

        /**
         * Properties of an EndConversationData.
         * @memberof dhlmixer
         * @interface IEndConversationData
         * @property {string|null} [platformType] EndConversationData platformType
         * @property {string|null} [appId] EndConversationData appId
         * @property {string|null} [userId] EndConversationData userId
         * @property {string|null} [agentId] EndConversationData agentId
         */

        /**
         * Constructs a new EndConversationData.
         * @memberof dhlmixer
         * @classdesc Represents an EndConversationData.
         * @implements IEndConversationData
         * @constructor
         * @param {dhlmixer.IEndConversationData=} [properties] Properties to set
         */
        function EndConversationData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EndConversationData platformType.
         * @member {string} platformType
         * @memberof dhlmixer.EndConversationData
         * @instance
         */
        EndConversationData.prototype.platformType = "";

        /**
         * EndConversationData appId.
         * @member {string} appId
         * @memberof dhlmixer.EndConversationData
         * @instance
         */
        EndConversationData.prototype.appId = "";

        /**
         * EndConversationData userId.
         * @member {string} userId
         * @memberof dhlmixer.EndConversationData
         * @instance
         */
        EndConversationData.prototype.userId = "";

        /**
         * EndConversationData agentId.
         * @member {string} agentId
         * @memberof dhlmixer.EndConversationData
         * @instance
         */
        EndConversationData.prototype.agentId = "";

        /**
         * Creates a new EndConversationData instance using the specified properties.
         * @function create
         * @memberof dhlmixer.EndConversationData
         * @static
         * @param {dhlmixer.IEndConversationData=} [properties] Properties to set
         * @returns {dhlmixer.EndConversationData} EndConversationData instance
         */
        EndConversationData.create = function create(properties) {
            return new EndConversationData(properties);
        };

        /**
         * Encodes the specified EndConversationData message. Does not implicitly {@link dhlmixer.EndConversationData.verify|verify} messages.
         * @function encode
         * @memberof dhlmixer.EndConversationData
         * @static
         * @param {dhlmixer.IEndConversationData} message EndConversationData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EndConversationData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.platformType != null && message.hasOwnProperty("platformType"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.platformType);
            if (message.appId != null && message.hasOwnProperty("appId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.appId);
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.userId);
            if (message.agentId != null && message.hasOwnProperty("agentId"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.agentId);
            return writer;
        };

        /**
         * Encodes the specified EndConversationData message, length delimited. Does not implicitly {@link dhlmixer.EndConversationData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dhlmixer.EndConversationData
         * @static
         * @param {dhlmixer.IEndConversationData} message EndConversationData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EndConversationData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EndConversationData message from the specified reader or buffer.
         * @function decode
         * @memberof dhlmixer.EndConversationData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dhlmixer.EndConversationData} EndConversationData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EndConversationData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dhlmixer.EndConversationData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.platformType = reader.string();
                    break;
                case 2:
                    message.appId = reader.string();
                    break;
                case 3:
                    message.userId = reader.string();
                    break;
                case 4:
                    message.agentId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EndConversationData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dhlmixer.EndConversationData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dhlmixer.EndConversationData} EndConversationData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EndConversationData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EndConversationData message.
         * @function verify
         * @memberof dhlmixer.EndConversationData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EndConversationData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.platformType != null && message.hasOwnProperty("platformType"))
                if (!$util.isString(message.platformType))
                    return "platformType: string expected";
            if (message.appId != null && message.hasOwnProperty("appId"))
                if (!$util.isString(message.appId))
                    return "appId: string expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isString(message.userId))
                    return "userId: string expected";
            if (message.agentId != null && message.hasOwnProperty("agentId"))
                if (!$util.isString(message.agentId))
                    return "agentId: string expected";
            return null;
        };

        /**
         * Creates an EndConversationData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dhlmixer.EndConversationData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dhlmixer.EndConversationData} EndConversationData
         */
        EndConversationData.fromObject = function fromObject(object) {
            if (object instanceof $root.dhlmixer.EndConversationData)
                return object;
            var message = new $root.dhlmixer.EndConversationData();
            if (object.platformType != null)
                message.platformType = String(object.platformType);
            if (object.appId != null)
                message.appId = String(object.appId);
            if (object.userId != null)
                message.userId = String(object.userId);
            if (object.agentId != null)
                message.agentId = String(object.agentId);
            return message;
        };

        /**
         * Creates a plain object from an EndConversationData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dhlmixer.EndConversationData
         * @static
         * @param {dhlmixer.EndConversationData} message EndConversationData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EndConversationData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.platformType = "";
                object.appId = "";
                object.userId = "";
                object.agentId = "";
            }
            if (message.platformType != null && message.hasOwnProperty("platformType"))
                object.platformType = message.platformType;
            if (message.appId != null && message.hasOwnProperty("appId"))
                object.appId = message.appId;
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.agentId != null && message.hasOwnProperty("agentId"))
                object.agentId = message.agentId;
            return object;
        };

        /**
         * Converts this EndConversationData to JSON.
         * @function toJSON
         * @memberof dhlmixer.EndConversationData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EndConversationData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EndConversationData;
    })();

    dhlmixer.KerfuAction = (function() {

        /**
         * Properties of a KerfuAction.
         * @memberof dhlmixer
         * @interface IKerfuAction
         * @property {string|null} [seq] KerfuAction seq
         * @property {dhlmixer.Action|null} [action] KerfuAction action
         * @property {dhlmixer.IKerfuAuthenticationData|null} [authenticationData] KerfuAction authenticationData
         * @property {dhlmixer.IEndConversationData|null} [endConversationData] KerfuAction endConversationData
         */

        /**
         * Constructs a new KerfuAction.
         * @memberof dhlmixer
         * @classdesc Represents a KerfuAction.
         * @implements IKerfuAction
         * @constructor
         * @param {dhlmixer.IKerfuAction=} [properties] Properties to set
         */
        function KerfuAction(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * KerfuAction seq.
         * @member {string} seq
         * @memberof dhlmixer.KerfuAction
         * @instance
         */
        KerfuAction.prototype.seq = "";

        /**
         * KerfuAction action.
         * @member {dhlmixer.Action} action
         * @memberof dhlmixer.KerfuAction
         * @instance
         */
        KerfuAction.prototype.action = 0;

        /**
         * KerfuAction authenticationData.
         * @member {dhlmixer.IKerfuAuthenticationData|null|undefined} authenticationData
         * @memberof dhlmixer.KerfuAction
         * @instance
         */
        KerfuAction.prototype.authenticationData = null;

        /**
         * KerfuAction endConversationData.
         * @member {dhlmixer.IEndConversationData|null|undefined} endConversationData
         * @memberof dhlmixer.KerfuAction
         * @instance
         */
        KerfuAction.prototype.endConversationData = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * KerfuAction data.
         * @member {"authenticationData"|"endConversationData"|undefined} data
         * @memberof dhlmixer.KerfuAction
         * @instance
         */
        Object.defineProperty(KerfuAction.prototype, "data", {
            get: $util.oneOfGetter($oneOfFields = ["authenticationData", "endConversationData"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new KerfuAction instance using the specified properties.
         * @function create
         * @memberof dhlmixer.KerfuAction
         * @static
         * @param {dhlmixer.IKerfuAction=} [properties] Properties to set
         * @returns {dhlmixer.KerfuAction} KerfuAction instance
         */
        KerfuAction.create = function create(properties) {
            return new KerfuAction(properties);
        };

        /**
         * Encodes the specified KerfuAction message. Does not implicitly {@link dhlmixer.KerfuAction.verify|verify} messages.
         * @function encode
         * @memberof dhlmixer.KerfuAction
         * @static
         * @param {dhlmixer.IKerfuAction} message KerfuAction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KerfuAction.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.seq != null && message.hasOwnProperty("seq"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.seq);
            if (message.action != null && message.hasOwnProperty("action"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.action);
            if (message.authenticationData != null && message.hasOwnProperty("authenticationData"))
                $root.dhlmixer.KerfuAuthenticationData.encode(message.authenticationData, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.endConversationData != null && message.hasOwnProperty("endConversationData"))
                $root.dhlmixer.EndConversationData.encode(message.endConversationData, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified KerfuAction message, length delimited. Does not implicitly {@link dhlmixer.KerfuAction.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dhlmixer.KerfuAction
         * @static
         * @param {dhlmixer.IKerfuAction} message KerfuAction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KerfuAction.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a KerfuAction message from the specified reader or buffer.
         * @function decode
         * @memberof dhlmixer.KerfuAction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dhlmixer.KerfuAction} KerfuAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KerfuAction.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dhlmixer.KerfuAction();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.seq = reader.string();
                    break;
                case 2:
                    message.action = reader.int32();
                    break;
                case 3:
                    message.authenticationData = $root.dhlmixer.KerfuAuthenticationData.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.endConversationData = $root.dhlmixer.EndConversationData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a KerfuAction message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dhlmixer.KerfuAction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dhlmixer.KerfuAction} KerfuAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KerfuAction.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a KerfuAction message.
         * @function verify
         * @memberof dhlmixer.KerfuAction
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        KerfuAction.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.seq != null && message.hasOwnProperty("seq"))
                if (!$util.isString(message.seq))
                    return "seq: string expected";
            if (message.action != null && message.hasOwnProperty("action"))
                switch (message.action) {
                default:
                    return "action: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.authenticationData != null && message.hasOwnProperty("authenticationData")) {
                properties.data = 1;
                {
                    var error = $root.dhlmixer.KerfuAuthenticationData.verify(message.authenticationData);
                    if (error)
                        return "authenticationData." + error;
                }
            }
            if (message.endConversationData != null && message.hasOwnProperty("endConversationData")) {
                if (properties.data === 1)
                    return "data: multiple values";
                properties.data = 1;
                {
                    var error = $root.dhlmixer.EndConversationData.verify(message.endConversationData);
                    if (error)
                        return "endConversationData." + error;
                }
            }
            return null;
        };

        /**
         * Creates a KerfuAction message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dhlmixer.KerfuAction
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dhlmixer.KerfuAction} KerfuAction
         */
        KerfuAction.fromObject = function fromObject(object) {
            if (object instanceof $root.dhlmixer.KerfuAction)
                return object;
            var message = new $root.dhlmixer.KerfuAction();
            if (object.seq != null)
                message.seq = String(object.seq);
            switch (object.action) {
            case "Authentication":
            case 0:
                message.action = 0;
                break;
            case "EndConversation":
            case 1:
                message.action = 1;
                break;
            }
            if (object.authenticationData != null) {
                if (typeof object.authenticationData !== "object")
                    throw TypeError(".dhlmixer.KerfuAction.authenticationData: object expected");
                message.authenticationData = $root.dhlmixer.KerfuAuthenticationData.fromObject(object.authenticationData);
            }
            if (object.endConversationData != null) {
                if (typeof object.endConversationData !== "object")
                    throw TypeError(".dhlmixer.KerfuAction.endConversationData: object expected");
                message.endConversationData = $root.dhlmixer.EndConversationData.fromObject(object.endConversationData);
            }
            return message;
        };

        /**
         * Creates a plain object from a KerfuAction message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dhlmixer.KerfuAction
         * @static
         * @param {dhlmixer.KerfuAction} message KerfuAction
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        KerfuAction.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.seq = "";
                object.action = options.enums === String ? "Authentication" : 0;
            }
            if (message.seq != null && message.hasOwnProperty("seq"))
                object.seq = message.seq;
            if (message.action != null && message.hasOwnProperty("action"))
                object.action = options.enums === String ? $root.dhlmixer.Action[message.action] : message.action;
            if (message.authenticationData != null && message.hasOwnProperty("authenticationData")) {
                object.authenticationData = $root.dhlmixer.KerfuAuthenticationData.toObject(message.authenticationData, options);
                if (options.oneofs)
                    object.data = "authenticationData";
            }
            if (message.endConversationData != null && message.hasOwnProperty("endConversationData")) {
                object.endConversationData = $root.dhlmixer.EndConversationData.toObject(message.endConversationData, options);
                if (options.oneofs)
                    object.data = "endConversationData";
            }
            return object;
        };

        /**
         * Converts this KerfuAction to JSON.
         * @function toJSON
         * @memberof dhlmixer.KerfuAction
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        KerfuAction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return KerfuAction;
    })();

    dhlmixer.KerfuReplyEventData = (function() {

        /**
         * Properties of a KerfuReplyEventData.
         * @memberof dhlmixer
         * @interface IKerfuReplyEventData
         * @property {string|null} [seqReply] KerfuReplyEventData seqReply
         * @property {string|null} [status] KerfuReplyEventData status
         */

        /**
         * Constructs a new KerfuReplyEventData.
         * @memberof dhlmixer
         * @classdesc Represents a KerfuReplyEventData.
         * @implements IKerfuReplyEventData
         * @constructor
         * @param {dhlmixer.IKerfuReplyEventData=} [properties] Properties to set
         */
        function KerfuReplyEventData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * KerfuReplyEventData seqReply.
         * @member {string} seqReply
         * @memberof dhlmixer.KerfuReplyEventData
         * @instance
         */
        KerfuReplyEventData.prototype.seqReply = "";

        /**
         * KerfuReplyEventData status.
         * @member {string} status
         * @memberof dhlmixer.KerfuReplyEventData
         * @instance
         */
        KerfuReplyEventData.prototype.status = "";

        /**
         * Creates a new KerfuReplyEventData instance using the specified properties.
         * @function create
         * @memberof dhlmixer.KerfuReplyEventData
         * @static
         * @param {dhlmixer.IKerfuReplyEventData=} [properties] Properties to set
         * @returns {dhlmixer.KerfuReplyEventData} KerfuReplyEventData instance
         */
        KerfuReplyEventData.create = function create(properties) {
            return new KerfuReplyEventData(properties);
        };

        /**
         * Encodes the specified KerfuReplyEventData message. Does not implicitly {@link dhlmixer.KerfuReplyEventData.verify|verify} messages.
         * @function encode
         * @memberof dhlmixer.KerfuReplyEventData
         * @static
         * @param {dhlmixer.IKerfuReplyEventData} message KerfuReplyEventData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KerfuReplyEventData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.seqReply != null && message.hasOwnProperty("seqReply"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.seqReply);
            if (message.status != null && message.hasOwnProperty("status"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.status);
            return writer;
        };

        /**
         * Encodes the specified KerfuReplyEventData message, length delimited. Does not implicitly {@link dhlmixer.KerfuReplyEventData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dhlmixer.KerfuReplyEventData
         * @static
         * @param {dhlmixer.IKerfuReplyEventData} message KerfuReplyEventData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KerfuReplyEventData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a KerfuReplyEventData message from the specified reader or buffer.
         * @function decode
         * @memberof dhlmixer.KerfuReplyEventData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dhlmixer.KerfuReplyEventData} KerfuReplyEventData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KerfuReplyEventData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dhlmixer.KerfuReplyEventData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.seqReply = reader.string();
                    break;
                case 2:
                    message.status = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a KerfuReplyEventData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dhlmixer.KerfuReplyEventData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dhlmixer.KerfuReplyEventData} KerfuReplyEventData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KerfuReplyEventData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a KerfuReplyEventData message.
         * @function verify
         * @memberof dhlmixer.KerfuReplyEventData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        KerfuReplyEventData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.seqReply != null && message.hasOwnProperty("seqReply"))
                if (!$util.isString(message.seqReply))
                    return "seqReply: string expected";
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isString(message.status))
                    return "status: string expected";
            return null;
        };

        /**
         * Creates a KerfuReplyEventData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dhlmixer.KerfuReplyEventData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dhlmixer.KerfuReplyEventData} KerfuReplyEventData
         */
        KerfuReplyEventData.fromObject = function fromObject(object) {
            if (object instanceof $root.dhlmixer.KerfuReplyEventData)
                return object;
            var message = new $root.dhlmixer.KerfuReplyEventData();
            if (object.seqReply != null)
                message.seqReply = String(object.seqReply);
            if (object.status != null)
                message.status = String(object.status);
            return message;
        };

        /**
         * Creates a plain object from a KerfuReplyEventData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dhlmixer.KerfuReplyEventData
         * @static
         * @param {dhlmixer.KerfuReplyEventData} message KerfuReplyEventData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        KerfuReplyEventData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.seqReply = "";
                object.status = "";
            }
            if (message.seqReply != null && message.hasOwnProperty("seqReply"))
                object.seqReply = message.seqReply;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            return object;
        };

        /**
         * Converts this KerfuReplyEventData to JSON.
         * @function toJSON
         * @memberof dhlmixer.KerfuReplyEventData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        KerfuReplyEventData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return KerfuReplyEventData;
    })();

    dhlmixer.KerfuMessagePostedEventData = (function() {

        /**
         * Properties of a KerfuMessagePostedEventData.
         * @memberof dhlmixer
         * @interface IKerfuMessagePostedEventData
         * @property {number|null} [sessionId] KerfuMessagePostedEventData sessionId
         * @property {number|Long|null} [messageId] KerfuMessagePostedEventData messageId
         * @property {dhlmixer.KerfuMessageType|null} [messageType] KerfuMessagePostedEventData messageType
         */

        /**
         * Constructs a new KerfuMessagePostedEventData.
         * @memberof dhlmixer
         * @classdesc Represents a KerfuMessagePostedEventData.
         * @implements IKerfuMessagePostedEventData
         * @constructor
         * @param {dhlmixer.IKerfuMessagePostedEventData=} [properties] Properties to set
         */
        function KerfuMessagePostedEventData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * KerfuMessagePostedEventData sessionId.
         * @member {number} sessionId
         * @memberof dhlmixer.KerfuMessagePostedEventData
         * @instance
         */
        KerfuMessagePostedEventData.prototype.sessionId = 0;

        /**
         * KerfuMessagePostedEventData messageId.
         * @member {number|Long} messageId
         * @memberof dhlmixer.KerfuMessagePostedEventData
         * @instance
         */
        KerfuMessagePostedEventData.prototype.messageId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * KerfuMessagePostedEventData messageType.
         * @member {dhlmixer.KerfuMessageType} messageType
         * @memberof dhlmixer.KerfuMessagePostedEventData
         * @instance
         */
        KerfuMessagePostedEventData.prototype.messageType = 0;

        /**
         * Creates a new KerfuMessagePostedEventData instance using the specified properties.
         * @function create
         * @memberof dhlmixer.KerfuMessagePostedEventData
         * @static
         * @param {dhlmixer.IKerfuMessagePostedEventData=} [properties] Properties to set
         * @returns {dhlmixer.KerfuMessagePostedEventData} KerfuMessagePostedEventData instance
         */
        KerfuMessagePostedEventData.create = function create(properties) {
            return new KerfuMessagePostedEventData(properties);
        };

        /**
         * Encodes the specified KerfuMessagePostedEventData message. Does not implicitly {@link dhlmixer.KerfuMessagePostedEventData.verify|verify} messages.
         * @function encode
         * @memberof dhlmixer.KerfuMessagePostedEventData
         * @static
         * @param {dhlmixer.IKerfuMessagePostedEventData} message KerfuMessagePostedEventData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KerfuMessagePostedEventData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sessionId != null && message.hasOwnProperty("sessionId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.sessionId);
            if (message.messageId != null && message.hasOwnProperty("messageId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.messageId);
            if (message.messageType != null && message.hasOwnProperty("messageType"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.messageType);
            return writer;
        };

        /**
         * Encodes the specified KerfuMessagePostedEventData message, length delimited. Does not implicitly {@link dhlmixer.KerfuMessagePostedEventData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dhlmixer.KerfuMessagePostedEventData
         * @static
         * @param {dhlmixer.IKerfuMessagePostedEventData} message KerfuMessagePostedEventData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KerfuMessagePostedEventData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a KerfuMessagePostedEventData message from the specified reader or buffer.
         * @function decode
         * @memberof dhlmixer.KerfuMessagePostedEventData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dhlmixer.KerfuMessagePostedEventData} KerfuMessagePostedEventData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KerfuMessagePostedEventData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dhlmixer.KerfuMessagePostedEventData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sessionId = reader.int32();
                    break;
                case 2:
                    message.messageId = reader.int64();
                    break;
                case 3:
                    message.messageType = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a KerfuMessagePostedEventData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dhlmixer.KerfuMessagePostedEventData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dhlmixer.KerfuMessagePostedEventData} KerfuMessagePostedEventData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KerfuMessagePostedEventData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a KerfuMessagePostedEventData message.
         * @function verify
         * @memberof dhlmixer.KerfuMessagePostedEventData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        KerfuMessagePostedEventData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.sessionId != null && message.hasOwnProperty("sessionId"))
                if (!$util.isInteger(message.sessionId))
                    return "sessionId: integer expected";
            if (message.messageId != null && message.hasOwnProperty("messageId"))
                if (!$util.isInteger(message.messageId) && !(message.messageId && $util.isInteger(message.messageId.low) && $util.isInteger(message.messageId.high)))
                    return "messageId: integer|Long expected";
            if (message.messageType != null && message.hasOwnProperty("messageType"))
                switch (message.messageType) {
                default:
                    return "messageType: enum value expected";
                case 0:
                case 1:
                case 2:
                case 4:
                    break;
                }
            return null;
        };

        /**
         * Creates a KerfuMessagePostedEventData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dhlmixer.KerfuMessagePostedEventData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dhlmixer.KerfuMessagePostedEventData} KerfuMessagePostedEventData
         */
        KerfuMessagePostedEventData.fromObject = function fromObject(object) {
            if (object instanceof $root.dhlmixer.KerfuMessagePostedEventData)
                return object;
            var message = new $root.dhlmixer.KerfuMessagePostedEventData();
            if (object.sessionId != null)
                message.sessionId = object.sessionId | 0;
            if (object.messageId != null)
                if ($util.Long)
                    (message.messageId = $util.Long.fromValue(object.messageId)).unsigned = false;
                else if (typeof object.messageId === "string")
                    message.messageId = parseInt(object.messageId, 10);
                else if (typeof object.messageId === "number")
                    message.messageId = object.messageId;
                else if (typeof object.messageId === "object")
                    message.messageId = new $util.LongBits(object.messageId.low >>> 0, object.messageId.high >>> 0).toNumber();
            switch (object.messageType) {
            case "Any":
            case 0:
                message.messageType = 0;
                break;
            case "Request":
            case 1:
                message.messageType = 1;
                break;
            case "Response":
            case 2:
                message.messageType = 2;
                break;
            case "PhantomResponse":
            case 4:
                message.messageType = 4;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a KerfuMessagePostedEventData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dhlmixer.KerfuMessagePostedEventData
         * @static
         * @param {dhlmixer.KerfuMessagePostedEventData} message KerfuMessagePostedEventData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        KerfuMessagePostedEventData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.sessionId = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.messageId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.messageId = options.longs === String ? "0" : 0;
                object.messageType = options.enums === String ? "Any" : 0;
            }
            if (message.sessionId != null && message.hasOwnProperty("sessionId"))
                object.sessionId = message.sessionId;
            if (message.messageId != null && message.hasOwnProperty("messageId"))
                if (typeof message.messageId === "number")
                    object.messageId = options.longs === String ? String(message.messageId) : message.messageId;
                else
                    object.messageId = options.longs === String ? $util.Long.prototype.toString.call(message.messageId) : options.longs === Number ? new $util.LongBits(message.messageId.low >>> 0, message.messageId.high >>> 0).toNumber() : message.messageId;
            if (message.messageType != null && message.hasOwnProperty("messageType"))
                object.messageType = options.enums === String ? $root.dhlmixer.KerfuMessageType[message.messageType] : message.messageType;
            return object;
        };

        /**
         * Converts this KerfuMessagePostedEventData to JSON.
         * @function toJSON
         * @memberof dhlmixer.KerfuMessagePostedEventData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        KerfuMessagePostedEventData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return KerfuMessagePostedEventData;
    })();

    dhlmixer.KerfuEvent = (function() {

        /**
         * Properties of a KerfuEvent.
         * @memberof dhlmixer
         * @interface IKerfuEvent
         * @property {dhlmixer.Event|null} [event] KerfuEvent event
         * @property {dhlmixer.IKerfuReplyEventData|null} [replyEventData] KerfuEvent replyEventData
         * @property {dhlmixer.IKerfuMessagePostedEventData|null} [messagePostedData] KerfuEvent messagePostedData
         */

        /**
         * Constructs a new KerfuEvent.
         * @memberof dhlmixer
         * @classdesc Represents a KerfuEvent.
         * @implements IKerfuEvent
         * @constructor
         * @param {dhlmixer.IKerfuEvent=} [properties] Properties to set
         */
        function KerfuEvent(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * KerfuEvent event.
         * @member {dhlmixer.Event} event
         * @memberof dhlmixer.KerfuEvent
         * @instance
         */
        KerfuEvent.prototype.event = 0;

        /**
         * KerfuEvent replyEventData.
         * @member {dhlmixer.IKerfuReplyEventData|null|undefined} replyEventData
         * @memberof dhlmixer.KerfuEvent
         * @instance
         */
        KerfuEvent.prototype.replyEventData = null;

        /**
         * KerfuEvent messagePostedData.
         * @member {dhlmixer.IKerfuMessagePostedEventData|null|undefined} messagePostedData
         * @memberof dhlmixer.KerfuEvent
         * @instance
         */
        KerfuEvent.prototype.messagePostedData = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * KerfuEvent data.
         * @member {"replyEventData"|"messagePostedData"|undefined} data
         * @memberof dhlmixer.KerfuEvent
         * @instance
         */
        Object.defineProperty(KerfuEvent.prototype, "data", {
            get: $util.oneOfGetter($oneOfFields = ["replyEventData", "messagePostedData"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new KerfuEvent instance using the specified properties.
         * @function create
         * @memberof dhlmixer.KerfuEvent
         * @static
         * @param {dhlmixer.IKerfuEvent=} [properties] Properties to set
         * @returns {dhlmixer.KerfuEvent} KerfuEvent instance
         */
        KerfuEvent.create = function create(properties) {
            return new KerfuEvent(properties);
        };

        /**
         * Encodes the specified KerfuEvent message. Does not implicitly {@link dhlmixer.KerfuEvent.verify|verify} messages.
         * @function encode
         * @memberof dhlmixer.KerfuEvent
         * @static
         * @param {dhlmixer.IKerfuEvent} message KerfuEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KerfuEvent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.event != null && message.hasOwnProperty("event"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.event);
            if (message.replyEventData != null && message.hasOwnProperty("replyEventData"))
                $root.dhlmixer.KerfuReplyEventData.encode(message.replyEventData, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.messagePostedData != null && message.hasOwnProperty("messagePostedData"))
                $root.dhlmixer.KerfuMessagePostedEventData.encode(message.messagePostedData, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified KerfuEvent message, length delimited. Does not implicitly {@link dhlmixer.KerfuEvent.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dhlmixer.KerfuEvent
         * @static
         * @param {dhlmixer.IKerfuEvent} message KerfuEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KerfuEvent.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a KerfuEvent message from the specified reader or buffer.
         * @function decode
         * @memberof dhlmixer.KerfuEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dhlmixer.KerfuEvent} KerfuEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KerfuEvent.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dhlmixer.KerfuEvent();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.event = reader.int32();
                    break;
                case 2:
                    message.replyEventData = $root.dhlmixer.KerfuReplyEventData.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.messagePostedData = $root.dhlmixer.KerfuMessagePostedEventData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a KerfuEvent message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dhlmixer.KerfuEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dhlmixer.KerfuEvent} KerfuEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KerfuEvent.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a KerfuEvent message.
         * @function verify
         * @memberof dhlmixer.KerfuEvent
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        KerfuEvent.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.event != null && message.hasOwnProperty("event"))
                switch (message.event) {
                default:
                    return "event: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.replyEventData != null && message.hasOwnProperty("replyEventData")) {
                properties.data = 1;
                {
                    var error = $root.dhlmixer.KerfuReplyEventData.verify(message.replyEventData);
                    if (error)
                        return "replyEventData." + error;
                }
            }
            if (message.messagePostedData != null && message.hasOwnProperty("messagePostedData")) {
                if (properties.data === 1)
                    return "data: multiple values";
                properties.data = 1;
                {
                    var error = $root.dhlmixer.KerfuMessagePostedEventData.verify(message.messagePostedData);
                    if (error)
                        return "messagePostedData." + error;
                }
            }
            return null;
        };

        /**
         * Creates a KerfuEvent message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dhlmixer.KerfuEvent
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dhlmixer.KerfuEvent} KerfuEvent
         */
        KerfuEvent.fromObject = function fromObject(object) {
            if (object instanceof $root.dhlmixer.KerfuEvent)
                return object;
            var message = new $root.dhlmixer.KerfuEvent();
            switch (object.event) {
            case "ActionReply":
            case 0:
                message.event = 0;
                break;
            case "MessagePosted":
            case 1:
                message.event = 1;
                break;
            }
            if (object.replyEventData != null) {
                if (typeof object.replyEventData !== "object")
                    throw TypeError(".dhlmixer.KerfuEvent.replyEventData: object expected");
                message.replyEventData = $root.dhlmixer.KerfuReplyEventData.fromObject(object.replyEventData);
            }
            if (object.messagePostedData != null) {
                if (typeof object.messagePostedData !== "object")
                    throw TypeError(".dhlmixer.KerfuEvent.messagePostedData: object expected");
                message.messagePostedData = $root.dhlmixer.KerfuMessagePostedEventData.fromObject(object.messagePostedData);
            }
            return message;
        };

        /**
         * Creates a plain object from a KerfuEvent message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dhlmixer.KerfuEvent
         * @static
         * @param {dhlmixer.KerfuEvent} message KerfuEvent
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        KerfuEvent.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.event = options.enums === String ? "ActionReply" : 0;
            if (message.event != null && message.hasOwnProperty("event"))
                object.event = options.enums === String ? $root.dhlmixer.Event[message.event] : message.event;
            if (message.replyEventData != null && message.hasOwnProperty("replyEventData")) {
                object.replyEventData = $root.dhlmixer.KerfuReplyEventData.toObject(message.replyEventData, options);
                if (options.oneofs)
                    object.data = "replyEventData";
            }
            if (message.messagePostedData != null && message.hasOwnProperty("messagePostedData")) {
                object.messagePostedData = $root.dhlmixer.KerfuMessagePostedEventData.toObject(message.messagePostedData, options);
                if (options.oneofs)
                    object.data = "messagePostedData";
            }
            return object;
        };

        /**
         * Converts this KerfuEvent to JSON.
         * @function toJSON
         * @memberof dhlmixer.KerfuEvent
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        KerfuEvent.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return KerfuEvent;
    })();

    dhlmixer.AuthenticationParams = (function() {

        /**
         * Properties of an AuthenticationParams.
         * @memberof dhlmixer
         * @interface IAuthenticationParams
         * @property {string|null} [appId] AuthenticationParams appId
         * @property {string|null} [appKey] AuthenticationParams appKey
         * @property {string|null} [appSecret] AuthenticationParams appSecret
         */

        /**
         * Constructs a new AuthenticationParams.
         * @memberof dhlmixer
         * @classdesc Represents an AuthenticationParams.
         * @implements IAuthenticationParams
         * @constructor
         * @param {dhlmixer.IAuthenticationParams=} [properties] Properties to set
         */
        function AuthenticationParams(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AuthenticationParams appId.
         * @member {string} appId
         * @memberof dhlmixer.AuthenticationParams
         * @instance
         */
        AuthenticationParams.prototype.appId = "";

        /**
         * AuthenticationParams appKey.
         * @member {string} appKey
         * @memberof dhlmixer.AuthenticationParams
         * @instance
         */
        AuthenticationParams.prototype.appKey = "";

        /**
         * AuthenticationParams appSecret.
         * @member {string} appSecret
         * @memberof dhlmixer.AuthenticationParams
         * @instance
         */
        AuthenticationParams.prototype.appSecret = "";

        /**
         * Creates a new AuthenticationParams instance using the specified properties.
         * @function create
         * @memberof dhlmixer.AuthenticationParams
         * @static
         * @param {dhlmixer.IAuthenticationParams=} [properties] Properties to set
         * @returns {dhlmixer.AuthenticationParams} AuthenticationParams instance
         */
        AuthenticationParams.create = function create(properties) {
            return new AuthenticationParams(properties);
        };

        /**
         * Encodes the specified AuthenticationParams message. Does not implicitly {@link dhlmixer.AuthenticationParams.verify|verify} messages.
         * @function encode
         * @memberof dhlmixer.AuthenticationParams
         * @static
         * @param {dhlmixer.IAuthenticationParams} message AuthenticationParams message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AuthenticationParams.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.appId != null && message.hasOwnProperty("appId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.appId);
            if (message.appKey != null && message.hasOwnProperty("appKey"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.appKey);
            if (message.appSecret != null && message.hasOwnProperty("appSecret"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.appSecret);
            return writer;
        };

        /**
         * Encodes the specified AuthenticationParams message, length delimited. Does not implicitly {@link dhlmixer.AuthenticationParams.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dhlmixer.AuthenticationParams
         * @static
         * @param {dhlmixer.IAuthenticationParams} message AuthenticationParams message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AuthenticationParams.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AuthenticationParams message from the specified reader or buffer.
         * @function decode
         * @memberof dhlmixer.AuthenticationParams
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dhlmixer.AuthenticationParams} AuthenticationParams
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AuthenticationParams.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dhlmixer.AuthenticationParams();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.appId = reader.string();
                    break;
                case 2:
                    message.appKey = reader.string();
                    break;
                case 3:
                    message.appSecret = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AuthenticationParams message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dhlmixer.AuthenticationParams
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dhlmixer.AuthenticationParams} AuthenticationParams
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AuthenticationParams.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AuthenticationParams message.
         * @function verify
         * @memberof dhlmixer.AuthenticationParams
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AuthenticationParams.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.appId != null && message.hasOwnProperty("appId"))
                if (!$util.isString(message.appId))
                    return "appId: string expected";
            if (message.appKey != null && message.hasOwnProperty("appKey"))
                if (!$util.isString(message.appKey))
                    return "appKey: string expected";
            if (message.appSecret != null && message.hasOwnProperty("appSecret"))
                if (!$util.isString(message.appSecret))
                    return "appSecret: string expected";
            return null;
        };

        /**
         * Creates an AuthenticationParams message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dhlmixer.AuthenticationParams
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dhlmixer.AuthenticationParams} AuthenticationParams
         */
        AuthenticationParams.fromObject = function fromObject(object) {
            if (object instanceof $root.dhlmixer.AuthenticationParams)
                return object;
            var message = new $root.dhlmixer.AuthenticationParams();
            if (object.appId != null)
                message.appId = String(object.appId);
            if (object.appKey != null)
                message.appKey = String(object.appKey);
            if (object.appSecret != null)
                message.appSecret = String(object.appSecret);
            return message;
        };

        /**
         * Creates a plain object from an AuthenticationParams message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dhlmixer.AuthenticationParams
         * @static
         * @param {dhlmixer.AuthenticationParams} message AuthenticationParams
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AuthenticationParams.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.appId = "";
                object.appKey = "";
                object.appSecret = "";
            }
            if (message.appId != null && message.hasOwnProperty("appId"))
                object.appId = message.appId;
            if (message.appKey != null && message.hasOwnProperty("appKey"))
                object.appKey = message.appKey;
            if (message.appSecret != null && message.hasOwnProperty("appSecret"))
                object.appSecret = message.appSecret;
            return object;
        };

        /**
         * Converts this AuthenticationParams to JSON.
         * @function toJSON
         * @memberof dhlmixer.AuthenticationParams
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AuthenticationParams.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AuthenticationParams;
    })();

    dhlmixer.AccessToken = (function() {

        /**
         * Properties of an AccessToken.
         * @memberof dhlmixer
         * @interface IAccessToken
         * @property {string|null} [accessToken] AccessToken accessToken
         */

        /**
         * Constructs a new AccessToken.
         * @memberof dhlmixer
         * @classdesc Represents an AccessToken.
         * @implements IAccessToken
         * @constructor
         * @param {dhlmixer.IAccessToken=} [properties] Properties to set
         */
        function AccessToken(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AccessToken accessToken.
         * @member {string} accessToken
         * @memberof dhlmixer.AccessToken
         * @instance
         */
        AccessToken.prototype.accessToken = "";

        /**
         * Creates a new AccessToken instance using the specified properties.
         * @function create
         * @memberof dhlmixer.AccessToken
         * @static
         * @param {dhlmixer.IAccessToken=} [properties] Properties to set
         * @returns {dhlmixer.AccessToken} AccessToken instance
         */
        AccessToken.create = function create(properties) {
            return new AccessToken(properties);
        };

        /**
         * Encodes the specified AccessToken message. Does not implicitly {@link dhlmixer.AccessToken.verify|verify} messages.
         * @function encode
         * @memberof dhlmixer.AccessToken
         * @static
         * @param {dhlmixer.IAccessToken} message AccessToken message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccessToken.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.accessToken != null && message.hasOwnProperty("accessToken"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.accessToken);
            return writer;
        };

        /**
         * Encodes the specified AccessToken message, length delimited. Does not implicitly {@link dhlmixer.AccessToken.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dhlmixer.AccessToken
         * @static
         * @param {dhlmixer.IAccessToken} message AccessToken message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccessToken.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AccessToken message from the specified reader or buffer.
         * @function decode
         * @memberof dhlmixer.AccessToken
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dhlmixer.AccessToken} AccessToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccessToken.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dhlmixer.AccessToken();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 2:
                    message.accessToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AccessToken message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dhlmixer.AccessToken
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dhlmixer.AccessToken} AccessToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccessToken.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AccessToken message.
         * @function verify
         * @memberof dhlmixer.AccessToken
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AccessToken.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.accessToken != null && message.hasOwnProperty("accessToken"))
                if (!$util.isString(message.accessToken))
                    return "accessToken: string expected";
            return null;
        };

        /**
         * Creates an AccessToken message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dhlmixer.AccessToken
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dhlmixer.AccessToken} AccessToken
         */
        AccessToken.fromObject = function fromObject(object) {
            if (object instanceof $root.dhlmixer.AccessToken)
                return object;
            var message = new $root.dhlmixer.AccessToken();
            if (object.accessToken != null)
                message.accessToken = String(object.accessToken);
            return message;
        };

        /**
         * Creates a plain object from an AccessToken message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dhlmixer.AccessToken
         * @static
         * @param {dhlmixer.AccessToken} message AccessToken
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AccessToken.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.accessToken = "";
            if (message.accessToken != null && message.hasOwnProperty("accessToken"))
                object.accessToken = message.accessToken;
            return object;
        };

        /**
         * Converts this AccessToken to JSON.
         * @function toJSON
         * @memberof dhlmixer.AccessToken
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AccessToken.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AccessToken;
    })();

    return dhlmixer;
})();

module.exports = $root;
