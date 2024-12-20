type T_URL = 'frontend' | 'backend' | 'db';

export const url: Record<T_URL, string> = {
	frontend: process.env.NEXT_PUBLIC_FRONTEND_BASE_URL || 'http://localhost:3000',
	backend: process.env.NEXT_PUBLIC_BACKEND_BASE_URL || 'http://localhost:3000/api/v1',
	db: process.env.POSTGRES_DB_URI || 'postgresql://postgres:postgres@localhost:5432/postgres',
};

export const PROTECTED_ROUTES = ['/dashboard(.*)'];

export const node_env: 'development' | 'production' | 'test' = process.env.NODE_ENV || 'development';

export const NEXTAUTH_SECRET = process.env.NEXTAUTH_SECRET || 'my-secret';
export const NEXTAUTH_URL = process.env.NEXTAUTH_URL || 'http://localhost:3000';
