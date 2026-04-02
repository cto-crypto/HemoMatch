export type BloodGroup = 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';

export interface BloodGroupData {
  id: BloodGroup;
  donateTo: BloodGroup[];
  receiveFrom: BloodGroup[];
  rarity: number; // Percentage
  isUniversalDonor?: boolean;
  isUniversalRecipient?: boolean;
}

export const BLOOD_GROUPS: BloodGroupData[] = [
  {
    id: 'A+',
    donateTo: ['A+', 'AB+'],
    receiveFrom: ['A+', 'A-', 'O+', 'O-'],
    rarity: 34,
  },
  {
    id: 'A-',
    donateTo: ['A+', 'A-', 'AB+', 'AB-'],
    receiveFrom: ['A-', 'O-'],
    rarity: 6,
  },
  {
    id: 'B+',
    donateTo: ['B+', 'AB+'],
    receiveFrom: ['B+', 'B-', 'O+', 'O-'],
    rarity: 9,
  },
  {
    id: 'B-',
    donateTo: ['B+', 'B-', 'AB+', 'AB-'],
    receiveFrom: ['B-', 'O-'],
    rarity: 2,
  },
  {
    id: 'AB+',
    donateTo: ['AB+'],
    receiveFrom: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    rarity: 3,
    isUniversalRecipient: true,
  },
  {
    id: 'AB-',
    donateTo: ['AB+', 'AB-'],
    receiveFrom: ['A-', 'B-', 'AB-', 'O-'],
    rarity: 1,
  },
  {
    id: 'O+',
    donateTo: ['A+', 'B+', 'AB+', 'O+'],
    receiveFrom: ['O+', 'O-'],
    rarity: 38,
  },
  {
    id: 'O-',
    donateTo: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    receiveFrom: ['O-'],
    rarity: 7,
    isUniversalDonor: true,
  },
];
