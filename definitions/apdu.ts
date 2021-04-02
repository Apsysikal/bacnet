enum BACnetPDU {
    "confirmed-request-pdu",
    "unconfirmed-request-pdu",
    "simple-ack-pdu",
    "complex-ack-pdu",
    "segment-ack-pdu",
    "error-pdu",
    "reject-pdu",
    "abort-pdu"
}

interface BACnetConfirmedRequestPDU {
    PDU_TYPE: number,
    SEGMENTED_MESSAGE: boolean,
    MORE_FOLLOWS: boolean,
    SEGMENTED_RESPONSE_ACCEPTED: boolean,
    RESERVED: number, // Shall be set to zero
    MAX_SEGMENTS_ACCEPTED: number, // As per Clause 20.1.2.4
    MAX_APDU_LENGTH_ACCEPTED: number, // As per Clause 20.1.2.5
    INVOKE_ID: number,
    SEQUENCE_NUMBER?: number, // Only if segmented message
    PROPOSED_WINDOW_SIZE?: number, // Only if segmented message
    SERVICE_CHOICE: null,
    SERVICE_REQUEST?: null
}

interface BACnetUnconfirmedRequestPDU {
    PDU_TYPE: number,
    RESERVED: number, // Shall be set to zero
    SERVICE_CHOICE: null,
    SERVICE_REQUEST?: null
}

interface BACnetSimpleACKPDU {
    PDU_TYPE: number,
    RESERVED: number, // Shall be set to zero
    INVOKE_ID: number,
    SERVICE_ACK_CHOICE: null
}

interface BACnetComplexACKPDU {
    PDU_TYPE: number,
    SEGMENTED_MESSAGE: boolean,
    MORE_FOLLOWS: boolean,
    RESERVED: number, // Shall be set to zero
    INVOKE_ID: number,
    SEQUENCE_NUMBER?: number, // Only if segmented message
    PROPOSED_WINDOW_SIZE?: number, // Only if segmented message
    SERVICE_ACK_CHOICE: null,
    SERVICE_ACK: null
}

interface BACnetSegmentACKPDU {
    PDU_TYPE: number,
    RESERVED: number, // Shall be set to zero
    NEGATIVE_ACK: boolean,
    SERVER: boolean,
    ORIGINAL_INVOKE_ID: number,
    SEQUENCE_NUMBER: number,
    ACTUAL_WINDOW_SIZE: number
}

interface BACnetErrorPDU {
    PDU_TYPE: number,
    RESERVED: number, // Shall be set to zero
    ORIGINAL_INVOKE_ID: number,
    ERROR_CHOICE: null,
    ERROR: null
}

interface BACnetRejectPDU {
    PDU_TYPE: number,
    RESERVED: number, // Shall be set to zero
    ORIGINAL_INVOKE_ID: number,
    REJECT_REASON: number,
}

interface BACnetAbortPDU {
    PDU_TYPE: number,
    RESERVED: number, // Shall be set to zero
    SERVER: boolean,
    ORIGINAL_INVOKE_ID: number,
    ABORT_REASON: number
}