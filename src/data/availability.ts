// Unit availability per project.
// EDIT THIS FILE to update bookings — set each unit's status to 'booked' or 'available'.
// Floors are listed top floor first. Units render left-to-right as flat numbers.

export type UnitStatus = 'booked' | 'available'

export interface Unit {
  flat: string
  sqft: number
  status: UnitStatus
}

export interface Floor {
  label: string
  units: Unit[]
}

export const availability: Record<string, Floor[]> = {
  premier: [
    { label: '5TH', units: [
      { flat: '501', sqft: 1625, status: 'available' },
      { flat: '502', sqft: 1650, status: 'booked' },
    ]},
    { label: '4TH', units: [
      { flat: '401', sqft: 1625, status: 'booked' },
      { flat: '402', sqft: 1650, status: 'available' },
    ]},
    { label: '3RD', units: [
      { flat: '301', sqft: 1625, status: 'booked' },
      { flat: '302', sqft: 1650, status: 'booked' },
    ]},
    { label: '2ND', units: [
      { flat: '201', sqft: 1625, status: 'available' },
      { flat: '202', sqft: 1650, status: 'available' },
    ]},
    { label: '1ST', units: [
      { flat: '101', sqft: 1625, status: 'booked' },
      { flat: '102', sqft: 1650, status: 'available' },
    ]},
  ],
  pride: [
    { label: '5TH', units: [
      { flat: '501', sqft: 1278, status: 'available' },
      { flat: '502', sqft: 1270, status: 'available' },
      { flat: '503', sqft: 1276, status: 'booked' },
      { flat: '504', sqft: 1273, status: 'available' },
    ]},
    { label: '4TH', units: [
      { flat: '401', sqft: 1278, status: 'booked' },
      { flat: '402', sqft: 1270, status: 'available' },
      { flat: '403', sqft: 1276, status: 'available' },
      { flat: '404', sqft: 1273, status: 'booked' },
    ]},
    { label: '3RD', units: [
      { flat: '301', sqft: 1278, status: 'booked' },
      { flat: '302', sqft: 1270, status: 'booked' },
      { flat: '303', sqft: 1276, status: 'available' },
      { flat: '304', sqft: 1273, status: 'booked' },
    ]},
    { label: '2ND', units: [
      { flat: '201', sqft: 1278, status: 'booked' },
      { flat: '202', sqft: 1270, status: 'available' },
      { flat: '203', sqft: 1276, status: 'booked' },
      { flat: '204', sqft: 1273, status: 'booked' },
    ]},
    { label: '1ST', units: [
      { flat: '101', sqft: 1278, status: 'booked' },
      { flat: '102', sqft: 1270, status: 'booked' },
      { flat: '103', sqft: 1276, status: 'available' },
      { flat: '104', sqft: 1273, status: 'booked' },
    ]},
  ],
  praise: [
    { label: '5TH', units: [
      { flat: '501', sqft: 1180, status: 'available' },
      { flat: '502', sqft: 1420, status: 'available' },
      { flat: '503', sqft: 1180, status: 'available' },
      { flat: '504', sqft: 1420, status: 'booked' },
    ]},
    { label: '4TH', units: [
      { flat: '401', sqft: 1180, status: 'available' },
      { flat: '402', sqft: 1420, status: 'booked' },
      { flat: '403', sqft: 1180, status: 'available' },
      { flat: '404', sqft: 1420, status: 'available' },
    ]},
    { label: '3RD', units: [
      { flat: '301', sqft: 1180, status: 'available' },
      { flat: '302', sqft: 1420, status: 'available' },
      { flat: '303', sqft: 1180, status: 'booked' },
      { flat: '304', sqft: 1420, status: 'available' },
    ]},
    { label: '2ND', units: [
      { flat: '201', sqft: 1180, status: 'available' },
      { flat: '202', sqft: 1420, status: 'available' },
      { flat: '203', sqft: 1180, status: 'available' },
      { flat: '204', sqft: 1420, status: 'booked' },
    ]},
    { label: '1ST', units: [
      { flat: '101', sqft: 1180, status: 'booked' },
      { flat: '102', sqft: 1420, status: 'available' },
      { flat: '103', sqft: 1180, status: 'available' },
      { flat: '104', sqft: 1420, status: 'available' },
    ]},
  ],
  prime: [
    { label: '5TH', units: [
      { flat: '501', sqft: 1850, status: 'available' },
      { flat: '502', sqft: 1880, status: 'available' },
    ]},
    { label: '4TH', units: [
      { flat: '401', sqft: 1850, status: 'available' },
      { flat: '402', sqft: 1880, status: 'available' },
    ]},
    { label: '3RD', units: [
      { flat: '301', sqft: 1850, status: 'booked' },
      { flat: '302', sqft: 1880, status: 'available' },
    ]},
    { label: '2ND', units: [
      { flat: '201', sqft: 1850, status: 'available' },
      { flat: '202', sqft: 1880, status: 'booked' },
    ]},
    { label: '1ST', units: [
      { flat: '101', sqft: 1850, status: 'available' },
      { flat: '102', sqft: 1880, status: 'available' },
    ]},
  ],
}
