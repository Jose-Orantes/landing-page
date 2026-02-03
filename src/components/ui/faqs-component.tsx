import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Link } from 'react-router-dom'

export default function FAQs() {
    const faqItems = [
        {
            id: 'item-1',
            question: 'Will my personal information be safe?',
            answer: 'Yes. We use encrypted communication and secure data storage. Your information - including credit reports and IDs - is only used for your credit repair process and never shared without permission.',
        },
        {
            id: 'item-2',
            question: 'How long does it take to see results?',
            answer: 'Many clients begin seeing changes in as little as 30-45 days, though most see significant progress over 3-6 months depending on the number of accounts being disputed and how fast the credit bureaus respond.',
        },
        {
            id: 'item-3',
            question: 'Can you remove all negative items from my report?',
            answer: "We can remove inaccurate, outdated, or unverifiable items - such as collections, charge-offs, or late payments that violate credit laws. If a negative mark is valid, we'll use other strategies and rebuilding tactics to reduce its impact.",
        },
        {
            id: 'item-4',
            question: 'What exactly do you do during the credit repair process?',
            answer: "We review your 3-bureau reports, identify inaccurate or unverifiable items, and send legal disputes backed by federal law (FCRA/FDCPA). Each round of disputes is tracked and updated in your client portal so you always know what's happening.",
        },
        {
            id: 'item-5',
            question: 'What if a creditor or credit bureau refuses to correct an error?',
            answer: "We don't give up after one round. We follow up with additional disputes, provide more documentation if needed, and if the bureau still fails to comply, we help you escalate through the Consumer Financial Protection Bureau (CFPB).",
        },
        {
            id: 'item-6',
            question: 'How much involvement is required from me?',
            answer: "Minimal. You'll simply forward us any letters or updates from the credit bureaus and maintain an active credit-monitoring account so we can track progress. We handle all dispute work and guide you on the best habits to rebuild your credit faster.",
        },
        {
            id: 'item-7',
            question: 'Can I do credit repair myself for free?',
            answer: 'You absolutely can - but most people hire us because we know the laws, processes, and timelines inside out. We handle the heavy lifting, legal documentation, and follow-ups for you, saving you time and frustration while getting better results faster.',
        },
    ]

    return (
        <section className="rounded-t-[3rem] py-[50px] bg-[#E8F1FF]">
            <div className="mx-auto max-w-5xl px-4 md:px-6">
                <div className="mb-12">
                    <h2 className="text-foreground text-4xl font-semibold">Frequently Asked Questions</h2>
                    <p className="text-muted-foreground mt-4 text-balance text-lg">Discover quick and comprehensive answers to common questions about our credit repair service and process.</p>
                </div>

                <div>
                    <Accordion
                        type="single"
                        collapsible
                        className="bg-white/70 backdrop-blur-md ring-foreground/10 rounded-lg w-full border border-foreground/10 px-8 py-3 shadow ring-1">
                        {faqItems.map((item) => (
                            <AccordionItem
                                key={item.id}
                                value={item.id}
                                className="border-dotted">
                                <AccordionTrigger className="cursor-pointer text-base hover:no-underline text-foreground">{item.question}</AccordionTrigger>
                                <AccordionContent>
                                    <p className="text-base text-muted-foreground">{item.answer}</p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    )
}
