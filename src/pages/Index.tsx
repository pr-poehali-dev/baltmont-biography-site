import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [searchQuery, setSearchQuery] = useState('');

  const biography = [
    {
      year: '1867',
      title: 'Рождение',
      text: 'Родился 3 (15) июня во Владимирской губернии в дворянской семье'
    },
    {
      year: '1890',
      title: 'Начало творчества',
      text: 'Выход первого сборника стихов "Сборник стихотворений"'
    },
    {
      year: '1894-1895',
      title: 'Расцвет символизма',
      text: 'Публикация знаковых сборников "Под северным небом" и "В безбрежности"'
    },
    {
      year: '1920',
      title: 'Эмиграция',
      text: 'Покинул Россию, жил в Париже, продолжал творческую деятельность'
    },
    {
      year: '1942',
      title: 'Последние годы',
      text: 'Умер в Нуази-ле-Гран близ Парижа в нищете и забвении'
    }
  ];

  const poems = [
    {
      title: 'Я мечтою ловил уходящие тени',
      period: 'Ранний',
      year: 1895,
      excerpt: 'Я мечтою ловил уходящие тени, / Уходящие тени погасавшего дня...'
    },
    {
      title: 'Безглагольность',
      period: 'Зрелый',
      year: 1900,
      excerpt: 'Есть в русской природе усталая нежность, / Безмолвная боль затаенной печали...'
    },
    {
      title: 'Камыши',
      period: 'Зрелый',
      year: 1895,
      excerpt: 'Полночной порою в болотной глуши / Чуть слышно, бесшумно, шуршат камыши...'
    },
    {
      title: 'Фантазия',
      period: 'Поздний',
      year: 1903,
      excerpt: 'Как живые изваянья, в искрах лунного сиянья...'
    },
    {
      title: 'Влага',
      period: 'Зрелый',
      year: 1902,
      excerpt: 'Вода, везде вода. Журчит среди камней...'
    }
  ];

  const quotes = [
    'Я не знаю мудрости, годной для других, только мимолетности я влагаю в стих',
    'Будем как солнце! Забудем о том, кто страдает, изнемогая!',
    'Я — изысканность русской медлительной речи',
    'В каждой мимолетности вижу я миры',
    'Я в этот мир пришел, чтоб видеть Солнце'
  ];

  const research = [
    {
      author: 'В.Я. Брюсов',
      title: 'Бальмонт как поэт-символист',
      year: 1904,
      summary: 'Анализ символистской поэтики и метафорики в творчестве Бальмонта'
    },
    {
      author: 'П.Н. Берков',
      title: 'Константин Бальмонт в эмиграции',
      year: 1968,
      summary: 'Исследование творческого пути поэта в парижский период'
    },
    {
      author: 'А.А. Блок',
      title: 'О лирике Бальмонта',
      year: 1903,
      summary: 'Критический очерк о музыкальности и импрессионизме стиха'
    }
  ];

  const filteredPoems = poems.filter(poem =>
    poem.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    poem.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background paper-texture">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-2 tracking-tight">
              Константинъ Бальмонтъ
            </h1>
            <p className="text-muted-foreground italic text-lg">
              Поэтъ Серебрянаго века • 1867—1942
            </p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-6xl">
        <Tabs defaultValue="biography" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto gap-2 bg-card/50">
            <TabsTrigger value="biography" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Icon name="BookOpen" size={16} className="mr-2" />
              Биография
            </TabsTrigger>
            <TabsTrigger value="poems" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Icon name="Scroll" size={16} className="mr-2" />
              Стихотворения
            </TabsTrigger>
            <TabsTrigger value="quotes" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Icon name="Quote" size={16} className="mr-2" />
              Цитаты
            </TabsTrigger>
            <TabsTrigger value="research" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Icon name="Library" size={16} className="mr-2" />
              Исследования
            </TabsTrigger>
          </TabsList>

          <TabsContent value="biography" className="space-y-6 animate-fade-in">
            <Card className="vintage-shadow border-2 border-border/50">
              <CardHeader className="text-center border-b border-border/30">
                <CardTitle className="text-4xl ornament">Жизненный путь</CardTitle>
                <CardDescription className="text-base mt-2">
                  От символистских высот до эмигрантского забвения
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-8">
                  {biography.map((item, index) => (
                    <div key={index} className="flex gap-6 group hover:translate-x-2 transition-transform duration-300">
                      <div className="flex-shrink-0 w-24 text-right">
                        <Badge variant="outline" className="text-lg px-3 py-1 border-2 border-accent text-accent font-semibold">
                          {item.year}
                        </Badge>
                      </div>
                      <div className="flex-1 border-l-2 border-accent/30 pl-6 pb-4">
                        <h3 className="text-2xl font-semibold mb-2 text-primary">{item.title}</h3>
                        <p className="text-muted-foreground text-lg leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="poems" className="space-y-6 animate-fade-in">
            <Card className="vintage-shadow border-2 border-border/50">
              <CardHeader className="border-b border-border/30">
                <CardTitle className="text-4xl text-center ornament">Поиск стихотворений</CardTitle>
                <div className="pt-4">
                  <div className="relative max-w-xl mx-auto">
                    <Icon name="Search" size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      placeholder="Найти по названию или строке..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 h-12 text-lg border-2"
                    />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid gap-4">
                  {filteredPoems.map((poem, index) => (
                    <Card key={index} className="hover:shadow-lg transition-all hover-scale border-border/50">
                      <CardHeader>
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <CardTitle className="text-2xl mb-2">{poem.title}</CardTitle>
                            <CardDescription className="text-base">
                              {poem.period} период • {poem.year}
                            </CardDescription>
                          </div>
                          <Badge variant="secondary" className="shrink-0">
                            {poem.period}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-lg leading-relaxed italic text-foreground/80">
                          {poem.excerpt}
                        </p>
                        <Button variant="link" className="mt-2 p-0 h-auto text-primary">
                          Читать полностью
                          <Icon name="ChevronRight" size={16} className="ml-1" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="quotes" className="space-y-6 animate-fade-in">
            <Card className="vintage-shadow border-2 border-border/50">
              <CardHeader className="text-center border-b border-border/30">
                <CardTitle className="text-4xl ornament">Избранные цитаты</CardTitle>
                <CardDescription className="text-base mt-2">
                  Афоризмы и строки, ставшие крылатыми
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-8">
                <div className="grid gap-6 md:grid-cols-2">
                  {quotes.map((quote, index) => (
                    <Card key={index} className="bg-secondary/30 border-2 border-accent/20 hover:border-accent/40 transition-colors">
                      <CardContent className="pt-6 pb-6 px-8">
                        <div className="relative">
                          <Icon name="Quote" size={32} className="absolute -top-2 -left-4 text-accent/30" />
                          <p className="text-xl leading-relaxed italic text-center relative z-10 text-foreground">
                            {quote}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="research" className="space-y-6 animate-fade-in">
            <Card className="vintage-shadow border-2 border-border/50">
              <CardHeader className="text-center border-b border-border/30">
                <CardTitle className="text-4xl ornament">Научные исследования</CardTitle>
                <CardDescription className="text-base mt-2">
                  Работы литературоведов о творчестве Бальмонта
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {research.map((item, index) => (
                    <Card key={index} className="hover:shadow-lg transition-all hover-scale border-border/50">
                      <CardHeader>
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <CardTitle className="text-2xl mb-1">{item.title}</CardTitle>
                            <CardDescription className="text-base">
                              <Icon name="User" size={14} className="inline mr-1" />
                              {item.author} • {item.year}
                            </CardDescription>
                          </div>
                          <Badge variant="outline" className="shrink-0">
                            {item.year}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-lg leading-relaxed text-muted-foreground">
                          {item.summary}
                        </p>
                        <Button variant="link" className="mt-2 p-0 h-auto text-primary">
                          <Icon name="ExternalLink" size={16} className="mr-1" />
                          Подробнее
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="border-t border-border bg-card/50 mt-16">
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-muted-foreground italic">
            «Я в этот мир пришел, чтоб видеть Солнце»
          </p>
          <p className="text-sm text-muted-foreground/70 mt-2">
            Литературный архив • 2024
          </p>
        </div>
      </footer>
    </div>
  );
}