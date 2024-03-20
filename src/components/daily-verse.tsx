import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card'

type BibleAPI = {
  book: string
  abbrev: string
  chapter: number
  verse: number
  text: string
}

async function getVerse(): Promise<BibleAPI> {
  const response = await fetch('https://bibleapi.onrender.com/random', {
    cache: 'force-cache',
    next: {
      tags: ['verse'],
    },
  })

  const verse = response.json()

  return verse
}

export async function DailyVerse() {
  const { book, chapter, verse, text } = await getVerse()

  return (
    <div className="px-6 md:w-[75%] lg:w-[70%] xl:w-[50%]">
      <Card>
        <CardHeader>
          <CardTitle>
            {book} - {chapter}:{verse}
          </CardTitle>
          <CardDescription>
            Escrito por <span className="underline">{book}</span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <h1>&quot;{text.replace('"', '')}&quot;</h1>
        </CardContent>
      </Card>
    </div>
  )
}
