export function canAccess(role: 'admin' | 'user', permission: string) {
  const rules: Record<string, string[]> = {
    admin: ['manage_devices', 'view_logs'],
    user: ['manage_devices'],
  };

  return rules[role]?.includes(permission);
}
