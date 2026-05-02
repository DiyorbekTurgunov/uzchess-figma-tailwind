import {News} from "@/components/types/news";

export async function getNews(): Promise<News[]> {
    try {
        const res = await fetch('http://localhost:3000/news', {
            cache: 'force-cache',
            next: {
                revalidate: 60,
            }
        });
        if (!res.ok) {
            return [];
        }
        const data = await res.json();
        data.forEach((x: { date: string; image: string }) => {
            x.date = new Date(x.date).toLocaleDateString('uz-UZ', { year: 'numeric', month: 'long', day: 'numeric' });
            x.image = 'http://localhost:3000/' + x.image.replace(/\\/g, '/');
        });
        return data;

    } catch {
        return [];
    }

}
export async function getOneNews(id: number): Promise<News> {
    
const res = await fetch(`http://localhost:3000/news/${id}`, {
    cache: 'force-cache',
    next: {
        revalidate: 60,
    }
});
const data = await res.json();
data.date = Date.parse(data.date);
return data;

}
