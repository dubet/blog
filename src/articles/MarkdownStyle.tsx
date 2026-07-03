import type { ParentProps } from "solid-js";
import { getFormattedDate, type Locale } from "@common";

export const Heading1 = (props: ParentProps) => {
	return (
		<h1 class="p-4 mb-8 flex font-bold border-l-12 items-center text-4xl  text-black border-b-6 text-left">
			{props.children}
		</h1>
	);
};

export const Heading2 = (props: ParentProps) => {
	return (
		<h2 class="mx-4 px-2 flex border-l-10 items-center text-3xl font-bold text-black my-8 border-b-4 pb-1 text-left">
			{props.children}
		</h2>
	);
};

export const Code = (props: ParentProps) => {
	return (
		<code class="text-white bg-black px-1 py-1 whitespace-nowrap text-sm rounded mx-0.5">
			{props.children}
		</code>
	);
};

export const Italic = (props: ParentProps) => {
	return <em class="italic text-amber-800">{props.children}</em>;
};

export const Bold = (props: ParentProps) => {
	return <strong class="font-bold text-1st">{props.children}</strong>;
};

export const Paragraph = (props: ParentProps) => {
	return <p class="text-black text-lg mb-6 px-4 leading-8">{props.children}</p>;
};

export const Footnote = (props: ParentProps) => {
	return (
		<sup class="text-black text-md px-1 inline-flex">[{props.children}]</sup>
	);
};

export const Separator = () => {
	return <hr class="text-black my-6 border-b-2" />;
};

export const Table = (props: ParentProps) => {
	return (
		<table class="w-11/12 mx-auto my-6 border-1st border-2">
			{props.children}
		</table>
	);
};

export const TableHead = (props: ParentProps) => {
	return <thead class="bg-1st text-white">{props.children}</thead>;
};

export const TableHeader = (props: ParentProps) => {
	return <th class="p-2 font-bold ">{props.children}</th>;
};

export const TableData = (props: ParentProps) => {
	return (
		<td class="p-1 border-r-2 border-r-1st text-center">{props.children}</td>
	);
};

export const TableRow = (props: ParentProps) => {
	return <tr class="border-b-1st border-b-2">{props.children}</tr>;
};

export const TableBody = (props: ParentProps) => {
	return <tbody class="text-black">{props.children}</tbody>;
};

export const UnorderedList = (props: ParentProps) => {
	return <ul class="list-disc mb-6 px-8 text-black">{props.children}</ul>;
};

export const OrderedList = (props: ParentProps) => {
	return <ul class="list-decimal mb-6 px-8 text-black">{props.children}</ul>;
};

export const ListItem = (props: ParentProps) => {
	return (
		<li class="text-black text-lg mb-2 px-4 leading-8">{props.children}</li>
	);
};

export const PublicationDate = (props: ParentProps<{ date: Date, locale: Locale }>) => {
	return (
		<div class="flex items-center justify-end">
			<p class="w-fit italic text-black text-right border-r-12 border-black mb-8 border-b-2 px-2">{getFormattedDate(new Date(props.date), props.locale)}</p>
		</div>
	);
};
